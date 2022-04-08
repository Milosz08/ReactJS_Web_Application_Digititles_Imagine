/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectTextInputElement.tsx
 * Last modified: 04/04/2022, 19:59
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
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BsTrash } from 'react-icons/bs';

import { RootState } from '../../redux/store';
import { ReduxAPIActions } from '../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { ProjectFieldsKeys, ProjectFormEditableMode } from '../../redux/redux-api-thunk/types';

import {
    CmsAddProjectClearInputButton, CmsAddProjectTextInput, CmsAddProjectTextInputElementContainer,
    CmsAddProjectTextInputTextLabel
} from './CmsAddProjectTextInputElement.styles';


interface PropsProvider {
    inputKey: ProjectFieldsKeys;
    topInputPlaceholder: string;
    innerInputPlaceholder: string;
}

const CmsAddProjectTextInputElement: React.FC<PropsProvider> = ({
    inputKey, topInputPlaceholder, innerInputPlaceholder
}): JSX.Element => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { projectDataForm, projectDataFormErrors } = state;
    const dispatcher = useDispatch();

    const formElement = projectDataForm[inputKey];
    const errorField = projectDataFormErrors[inputKey];
    const idFormElement = `cms_text_input_element__${inputKey.toLocaleLowerCase()}`;

    const handleInputChangeEvent = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatcher(ReduxAPIActions.insertProjectFormElement(inputKey, target.value));
        if (errorField) {
            dispatcher(ReduxAPIActions.insertProjectFormElement(inputKey, false, ProjectFormEditableMode.ERROR));
        }
    };

    const handleClearInput = (): void => {
        dispatcher(ReduxAPIActions.insertProjectFormElement(inputKey, ''));
    };

    return (
        <ThemeProvider
            theme = {{ $ifError: errorField }}
        >
            <CmsAddProjectTextInputElementContainer
                htmlFor = {idFormElement}
            >
                <CmsAddProjectTextInputTextLabel>
                    {topInputPlaceholder}
                </CmsAddProjectTextInputTextLabel>
                <CmsAddProjectTextInput
                    type = 'text'
                    id = {idFormElement}
                    placeholder = {innerInputPlaceholder}
                    value = {formElement! as string}
                    onChange = {handleInputChangeEvent}
                />
                <CmsAddProjectClearInputButton
                    title = 'Click to clear input field value'
                    onClick = {handleClearInput}
                >
                    <BsTrash/>
                </CmsAddProjectClearInputButton>
            </CmsAddProjectTextInputElementContainer>
        </ThemeProvider>
    );
};

export default CmsAddProjectTextInputElement;