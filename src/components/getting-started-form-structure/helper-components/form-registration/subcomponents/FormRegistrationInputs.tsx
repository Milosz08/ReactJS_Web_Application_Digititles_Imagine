/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormRegistrationInputs.tsx
 * Last modified: 14/03/2022, 22:47
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

import { RootState } from '../../../../../redux/store';
import { ReduxFormsActions } from '../../../../../redux/redux-subreducers/redux-forms/actions';
import { InitStateAPItypes } from '../../../../../redux/redux-api-thunk/initialState';
import { AllFormsTypes, MessageFormInputs, RegistrationFormInputs } from '../../../../../redux/redux-subreducers/redux-forms/types';

import { FormRegistrationHalfLengthLabelElement, FormRegistrationInputElement } from '../FormRegistration.styles';


const FormRegistrationInputs: React.FC = (): JSX.Element => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { registrationForm, registrationFormErrors } = state;
    const dispatcher = useDispatch();

    const { USERNAME, USER_LASTNAME } = RegistrationFormInputs;
    const { username, lastname } = registrationForm;

    const handleOnChangeInput = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        dispatcher(ReduxFormsActions.setErrorInFormField(AllFormsTypes.REGISTRATION, target.id as MessageFormInputs, false));
        dispatcher(ReduxFormsActions.setFieldInRegistrationForm(target.id as RegistrationFormInputs, target.value));
    };

    return (
        <>
            <FormRegistrationHalfLengthLabelElement
                htmlFor = {USERNAME}
            >
                <FormRegistrationInputElement
                    placeholder = 'Your name *'
                    value = {username}
                    id = {USERNAME}
                    onChange = {handleOnChangeInput}
                    $ifError = {registrationFormErrors.username}
                />
            </FormRegistrationHalfLengthLabelElement>
            <FormRegistrationHalfLengthLabelElement
                htmlFor = {USER_LASTNAME}
            >
                <FormRegistrationInputElement
                    placeholder = 'Your last name'
                    value = {lastname}
                    id = {USER_LASTNAME}
                    onChange = {handleOnChangeInput}
                    $ifError = {registrationFormErrors.lastname}
                />
            </FormRegistrationHalfLengthLabelElement>
        </>
    );
};

export default FormRegistrationInputs;