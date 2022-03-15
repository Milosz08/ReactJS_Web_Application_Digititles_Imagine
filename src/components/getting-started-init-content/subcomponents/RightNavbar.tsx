/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: RightNavbar.tsx
 * Last modified: 13/03/2022, 15:27
 * Project name: digititles-imagine
 *
 * Licensed under the MIT license; you may not use this file except in compliance with the License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * THE ABOVE COPYRIGHT NOTICE AND THIS PERMISSION NOTICE SHALL BE INCLUDED IN ALL
 * COPIES OR SUBSTANTIAL PORTIONS OF THE SOFTWARE.
 */

import * as React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Gsap } from '../../../helper-primitives/GsapAnimations';

import { RootState } from '../../../redux/store';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';
import { GettingStartedNavElms, ReduxDOMstateKeys } from '../../../redux/redux-dom-manipulate/types';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import {
    GettingStartedRightNavbarContainer, GettingStartedRightNavbarElement
} from '../GettingStartedInitContent.styles';


interface PropsProvider {
    referential: React.MutableRefObject<any>;
}

const RightNavbar: React.FC<PropsProvider> = ({ referential }): JSX.Element => {

    const {
        gettingStartedActiveSection, allActiveSections
    }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const { allRefs } = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);

    const dispatcher = useDispatch();

    const handleChangeSingleSection = (active: GettingStartedNavElms, idx: number): void => {
        dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.GETTING_STARTED_ACTIVE_SECTION, active));
        Gsap.scrollIntoContext(allRefs![idx].current);
    };

    const generateNavElements: JSX.Element[] = Object.keys(GettingStartedNavElms).map((elementKey, idx) => (
        <GettingStartedRightNavbarElement
            key = {elementKey}
            onClick = {() => handleChangeSingleSection(GettingStartedNavElms[elementKey], idx)}
            $ifActive = {gettingStartedActiveSection === GettingStartedNavElms[elementKey]}
            disabled = {!Boolean(allActiveSections.find(section => section === GettingStartedNavElms[elementKey]))}
        >
            {GettingStartedNavElms[elementKey]}?
        </GettingStartedRightNavbarElement>
    ));

    return (
        <GettingStartedRightNavbarContainer
            ref = {referential}
        >
            {generateNavElements}
        </GettingStartedRightNavbarContainer>
    );
};

export default RightNavbar;