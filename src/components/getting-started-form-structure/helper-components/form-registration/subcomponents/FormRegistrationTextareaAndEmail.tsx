/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormRegistrationTextareaAndEmail.tsx
 * Last modified: 14/03/2022, 22:38
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

import { TEXTARE_MIN_SINGS, TEXTAREA_MAX_SIGNS } from '../../../../../static/gettingStartedContent';

import { RootState } from '../../../../../redux/store';
import { ReduxAPIActions } from '../../../../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../../../../redux/redux-api-thunk/initialState';
import { AllFormsTypes, MessageFormInputs, RegistrationFormInputs } from '../../../../../redux/redux-api-thunk/types';

import {
    FormRegistrationFullLengthLabelElement, FormRegistrationInputElement, FormRegistrationTextareaElement
} from '../FormRegistration.styles';


const FormRegistrationTextareaAndEmail: React.FC = (): JSX.Element => {

    const { registrationForm, registrationFormErrors }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const dispatcher = useDispatch();

    const { USER_EMAIL, USER_MESSAGE } = RegistrationFormInputs;
    const { email, message } = registrationForm;

    const handleOnChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        dispatcher(ReduxAPIActions.setErrorInFormField(AllFormsTypes.REGISTRATION, target.id as MessageFormInputs, false));
        dispatcher(ReduxAPIActions.setFieldInRegistrationForm(target.id as RegistrationFormInputs, target.value));
    };

    return (
        <>
            <FormRegistrationFullLengthLabelElement
                htmlFor = {USER_EMAIL}
            >
                <FormRegistrationInputElement
                    placeholder = 'Your email address *'
                    id = {USER_EMAIL}
                    type = 'email'
                    value = {email}
                    onChange  = {handleOnChangeInput}
                    $ifError = {registrationFormErrors.email}
                />
            </FormRegistrationFullLengthLabelElement>
            <FormRegistrationFullLengthLabelElement
                htmlFor = {USER_MESSAGE}
            >
                <FormRegistrationTextareaElement
                    placeholder = 'Type here your message *'
                    id = {USER_MESSAGE}
                    rows = {4}
                    value = {message}
                    onChange  = {handleOnChangeInput}
                    minLength = {TEXTARE_MIN_SINGS}
                    maxLength = {TEXTAREA_MAX_SIGNS}
                    $ifError = {registrationFormErrors.message}
                />
            </FormRegistrationFullLengthLabelElement>
        </>
    );
};

export default FormRegistrationTextareaAndEmail;