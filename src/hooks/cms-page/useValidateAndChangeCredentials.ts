/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useValidateAndChangeCredentials.ts
 * Last modified: 03/04/2022, 13:08
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

import {
    ChangeCredentialsContext, ChangeCredentialsContextTypes
} from '../../context/change-credentials-refs/ChangeCredentialsRefsProvider';

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { ReduxFormsActions } from '../../redux/redux-subreducers/redux-forms/actions';
import { axiosInstance, JavaApiEndpoints } from '../../redux/redux-api-thunk/request';
import { CmsChangeCredentialsKeys, CmsCredentialsLevels } from '../../redux/redux-api-thunk/types';

/**
 * Custom hook responsible for providing validate change credentials form data and submit this data
 * to backend api.
 *
 * @return { (e: React.ChangeEvent<HTMLFormElement>) => void } - callback function invoking on submit form.
 */
const useValidateAndChangeCredentials = (): (e: React.ChangeEvent<HTMLFormElement>) => void => {

    const { changeCredentialsForm, sessionInfo }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const context = useContext<Partial<ChangeCredentialsContextTypes>>(ChangeCredentialsContext);

    const { LOGIN_ERROR, PASSWORD_ERROR, REPEAT_PASSWORD_ERROR } = CmsChangeCredentialsKeys;
    const { login, password, repeatPassword } = context;
    const dispatcher = useDispatch();

    const validateSingleFields = (): boolean => {
        let loginNotValid = false, passwordNotValid = false, repeatPasswordNotValid = false;
        if (login!.current.value.length < 8 || login!.current.value.length > 30) {
            loginNotValid = true;
            dispatcher(ReduxFormsActions.changeCredentialsFormElement(LOGIN_ERROR, true));
        }
        if (password!.current.value.length < 8 || password!.current.value.length > 30) {
            passwordNotValid = true;
            dispatcher(ReduxFormsActions.changeCredentialsFormElement(PASSWORD_ERROR, true));
        }
        if (repeatPassword!.current.value !== password!.current.value || repeatPassword!.current.value === '') {
            repeatPasswordNotValid = true;
            dispatcher(ReduxFormsActions.changeCredentialsFormElement(REPEAT_PASSWORD_ERROR, true));
        }
        return !loginNotValid && !passwordNotValid && !repeatPasswordNotValid;
    };

    const clearAllFields = (): void => {
        Object.keys(context).forEach(key => {
            if (Boolean(context[key])) context[key]!.current.value = '';
        });
    };

    return async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (sessionInfo.role === CmsCredentialsLevels.ADMINISTRATOR && validateSingleFields()) {
            const sendObject = { username: login!.current.value, password: password!.current.value };
            const sendEndpoint = `${JavaApiEndpoints.AUTHENTICATIONS}/${changeCredentialsForm.mode}`;
            await axiosInstance.put(sendEndpoint, sendObject, { headers: { Authorization: sessionInfo.bearerToken } });
            clearAllFields();
        }
    };
};

export default useValidateAndChangeCredentials;