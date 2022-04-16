/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ChooseSoftwareCustomInputComponent.tsx
 * Last modified: 16/04/2022, 03:47
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

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { ReduxProjFormActions } from '../../../redux/redux-subreducers/redux-project-form/actions';

import {
    SoftwareContext, SoftwareContextTypes
} from '../../cms-add-project-colors-and-software-section/subcomponents/CmsAddProjectSoftwareSection';
import { ChooseSoftwareForContext, ChooseSoftwareForContextTypes } from './ChooseSoftwareFor';

import { ChooseSoftwareForTextInput, ChooseSoftwareForTextInputLabel } from '../CmsAddProjectSoftwareSingleSection.styles';


const ChooseSoftwareCustomInputComponent: React.FC = (): JSX.Element => {

    const { projectFormIfActiveCustomProp }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const { elRefs } = useContext<Partial<ChooseSoftwareForContextTypes>>(ChooseSoftwareForContext);
    const { soft, iteration } = useContext<Partial<SoftwareContextTypes>>(SoftwareContext);

    const ifCustomBoxEnabled = projectFormIfActiveCustomProp[iteration!];
    const dispatcher = useDispatch();

    const handleChangeCustomInputElement = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        if (ifCustomBoxEnabled) {
            dispatcher(ReduxProjFormActions.changeProjectFormSoftUsedFor(iteration!, target.value));
        }
    };

    return (
        <ChooseSoftwareForTextInputLabel
            htmlFor = {`own_property_input__${soft!.softwareFor}__${iteration}`}
        >
            <ChooseSoftwareForTextInput
                type = 'text'
                placeholder = 'Own value'
                onBlur = {handleChangeCustomInputElement}
                disabled = {!ifCustomBoxEnabled}
                ref = {elRefs![1]}
            />
        </ChooseSoftwareForTextInputLabel>
    );
};

export default ChooseSoftwareCustomInputComponent;