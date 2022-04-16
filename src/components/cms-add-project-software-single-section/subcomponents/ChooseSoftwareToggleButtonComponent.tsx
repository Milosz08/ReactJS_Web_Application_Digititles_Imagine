/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ChooseSoftwareToggleButtonComponent.tsx
 * Last modified: 16/04/2022, 03:40
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
import { BsArrowRepeat } from 'react-icons/bs';

import useRotateArrowOnClick from '../../../hooks/cms-page/useRotateArrowOnClick';

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { ReduxProjFormActions } from '../../../redux/redux-subreducers/redux-project-form/actions';

import {
    SoftwareContext, SoftwareContextTypes
} from '../../cms-add-project-colors-and-software-section/subcomponents/CmsAddProjectSoftwareSection';

import { ChooseSoftwareToggleButton } from '../CmsAddProjectSoftwareSingleSection.styles';


interface PropsProvider {
    allRefsCurrents: any[];
}

const ChooseSoftwareToggleButtonComponent: React.FC<PropsProvider> = ({ allRefsCurrents }): JSX.Element => {

    const { projectFormIfActiveCustomProp }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { iteration } = useContext<Partial<SoftwareContextTypes>>(SoftwareContext);

    const ifCustomBoxEnabled = projectFormIfActiveCustomProp[iteration!];
    const arrowRef = useRotateArrowOnClick();
    const dispatcher = useDispatch();


    const handleToggleSelectAndInputProvider = (): void => {
        dispatcher(ReduxProjFormActions.changeProjecFormIfActiveCustomSoft(iteration!, !ifCustomBoxEnabled));
        dispatcher(ReduxProjFormActions
            .changeProjectFormSoftUsedFor(iteration!, allRefsCurrents[ifCustomBoxEnabled ? 0 : 1].current.value));
    };

    return (
        <ChooseSoftwareToggleButton
            title = 'Click to toggle bewtweed select box and cutom input'
            type = 'button'
            onClick = {handleToggleSelectAndInputProvider}
            ref = {arrowRef}
        >
            <BsArrowRepeat/>
        </ChooseSoftwareToggleButton>
    );
};

export default ChooseSoftwareToggleButtonComponent;