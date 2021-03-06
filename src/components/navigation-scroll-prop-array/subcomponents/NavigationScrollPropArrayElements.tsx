/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NavigationScrollPropArrayElements.tsx
 * Last modified: 08/03/2022, 18:48
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
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { gsap, Expo } from 'gsap';
import { RoutingPaths } from '../../../static/appRouting';

import { RootState } from '../../../redux/store';
import { AllSections } from '../../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';
import { ReduxDOMActions, SectionKey } from '../../../redux/redux-dom-manipulate/actions';

import {
    NavigationScrollAllNavigationElements, NavigationScrollAllNavigationSingleElement
} from '../NavigationScrollPropArray.styles';


interface PropsProvider {
    sectionType: AllSections;
    propArray: string[];
    allRefs: React.MutableRefObject<any>[];
}

const NavigationScrollPropArrayElements: React.FC<PropsProvider> = ({ sectionType, propArray, allRefs }): JSX.Element => {

    const { activeSection }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const dispatcher = useDispatch();
    const { pathname } = useLocation();

    const handleScrollToElement = (idx: number, section: string): void => {
        dispatcher(ReduxDOMActions.changeActiveSection(sectionType, section as SectionKey));
        const refs = pathname === RoutingPaths.SERVICES
            ? [ ...allRefs[0].current.children, allRefs[1].current ][idx] : idx === 0 ? 0 : allRefs[idx - 1].current;
        gsap.to(window, { duration: 1.5, ease: Expo.easeInOut, scrollTo: refs });
    };

    const generateAllElements: JSX.Element[] = propArray.map((nav, idx) => (
        <NavigationScrollAllNavigationSingleElement
            key = {idx}
            onClick = {() => handleScrollToElement(idx, nav)}
            $ifActive = {nav === activeSection[sectionType]}
        >
            {nav}
        </NavigationScrollAllNavigationSingleElement>
    ));

    return (
        <NavigationScrollAllNavigationElements>
            {generateAllElements}
        </NavigationScrollAllNavigationElements>
    );
};

export default NavigationScrollPropArrayElements;