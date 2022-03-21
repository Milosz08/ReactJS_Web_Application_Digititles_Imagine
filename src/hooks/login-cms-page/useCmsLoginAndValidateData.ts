/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useCmsLoginAndValidateData.ts
 * Last modified: 20/03/2022, 22:22
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
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useMultipleRefs from '../reusable/useMultipleRefs';

import { ReduxAPIActions } from '../../redux/redux-api-thunk/actions';
import { axiosInstance, JavaApiEndpoints } from '../../redux/redux-api-thunk/request';
import { AllCookiesContext, AllCookiesTypes } from '../../context/cookies-context/AllCookiesProvider';
import { AllCookies } from '../../context/cookies-context/allCookiesConfig';

interface HookProps {
    elRefs: React.MutableRefObject<any>[];
    errors: { loginE: boolean, passwordE: boolean };
    invoker: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

/**
 * Custom hook responsible for communicate with backend and validate username and password.
 *
 * @return { HookProps } - first: referentials, second: errors object, third: on submit invoker callback function.
 */
const useCmsLoginAndValidateData = (): HookProps => {

    const { setCookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);
    const [ errors, setErrors ] = useState<{ loginE: boolean, passwordE: boolean }>({ loginE: false, passwordE: false });

    const { elRefs } = useMultipleRefs(2);
    const dispatcher = useDispatch();

    const handleOnSubmitForm = (e: React.ChangeEvent<HTMLFormElement>): void => {
        const [ login, password ] = elRefs;
        e.preventDefault();
        const senderObject = { username: login.current.value, password: password.current.value };
        axiosInstance.post(`${JavaApiEndpoints.AUTHENTICATIONS}/validate`, senderObject)
            .then(res => {
                setCookie!(AllCookies.BEARER_TOKEN, res.data.bearerToken);
                setCookie!(AllCookies.CMS_SESSION, res.data.authLevel);
                dispatcher(ReduxAPIActions.changeSessionInfo(true, res.data.authLevel, res.data.bearerToken));
            })
            .catch(err => {
                console.clear();
                if (!err.response.data.errors.username || !err.response.data.errors.password) {
                    setErrors({ loginE: !err.response.data.errors.username, passwordE: !err.response.data.errors.password });
                } else {
                    setErrors({ loginE: err.response.data.errors.username, passwordE: err.response.data.errors.password });
                }
            });
    };

    useEffect(() => {
        const [ login, password ] = elRefs;
        const resetInputError = (value: string): void => {
            setErrors(prevState => ({ ...prevState, [value]: false }));
        };
        if (login) {
            login.current.addEventListener('input', () => resetInputError('loginE'), true);
        }
        if (password) {
            password.current.addEventListener('input', () => resetInputError('passwordE'), true);
        }
    }, [ elRefs ]);

    return { elRefs, errors, invoker: handleOnSubmitForm };
};

export default useCmsLoginAndValidateData;