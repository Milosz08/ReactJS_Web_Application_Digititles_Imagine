/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsChangeCredentialsInputs.tsx
 * Last modified: 03/04/2022, 12:18
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

import useRemoveErrorHighlight from '../../../hooks/cms-page/useRemoveErrorHighlight';

import { Webpage } from '../../../helper-primitives/Webpage';
import { CmsChangeCredentialsKeys } from '../../../redux/redux-api-thunk/types';

import {
    CmsChangeCredentialsFormInputsContainer, CmsChangeCredentialsSubmitButton
} from '../CmsChangeCredentials.styles';

import UniversalPasswordInput from '../../universal-password-input/UniversalPasswordInput';


const CmsChangeCredentialsInputs: React.FC = (): JSX.Element => {

    const { context, changeCredentialsForm, handleResetFields } = useRemoveErrorHighlight();
    const { loginError, passwordError, repeatPasswordError, mode } = changeCredentialsForm;
    const { login, password, repeatPassword } = context;

    return (
        <CmsChangeCredentialsFormInputsContainer>
            <UniversalPasswordInput
                placeholder = 'New login'
                ifError = {loginError}
                elementRef = {login!}
                onChangeCallback = {handleResetFields.bind(null, CmsChangeCredentialsKeys.LOGIN_ERROR)}
                ifSmallInput = {true}
            />
            <UniversalPasswordInput
                placeholder = 'New password'
                ifProtected = {true}
                ifError = {passwordError}
                elementRef = {password!}
                onChangeCallback = {handleResetFields.bind(null, CmsChangeCredentialsKeys.PASSWORD_ERROR)}
                ifSmallInput = {true}
            />
            <UniversalPasswordInput
                placeholder = 'Repeat new password'
                ifProtected = {true}
                ifError = {repeatPasswordError}
                elementRef = {repeatPassword!}
                onChangeCallback = {handleResetFields.bind(null, CmsChangeCredentialsKeys.REPEAT_PASSWORD_ERROR)}
                ifSmallInput = {true}
            />
            <CmsChangeCredentialsSubmitButton
                type = 'submit'
                title = {`Click to change credentials for ${Webpage.capitalisedWord(mode)} account.`}
            >
                Submit changes
            </CmsChangeCredentialsSubmitButton>
        </CmsChangeCredentialsFormInputsContainer>
    );
};

export default CmsChangeCredentialsInputs;