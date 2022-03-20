/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsLoginForm.tsx
 * Last modified: 20/03/2022, 20:40
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

import { CmsLoginFormContainer, CmsLoginSubmitButton } from './CmsLoginForm.styles';

import useCmsLoginAndValidateData from '../../hooks/login-cms-page/useCmsLoginAndValidateData';

import HeaderElement from '../universal-components/HeaderElement';
import UniversalPasswordInput from '../universal-password-input/UniversalPasswordInput';


const CmsLoginForm: React.FC = (): JSX.Element => {

    const { elRefs, errors, invoker } = useCmsLoginAndValidateData();
    const [ login, password ] = elRefs;

    return (
        <CmsLoginFormContainer
            noValidate = {true}
            onSubmit = {invoker}
        >
            <HeaderElement>
                CMS Login
            </HeaderElement>
            <UniversalPasswordInput
                placeholder = 'Login'
                ifError = {errors.loginE}
                elementRef = {login}
            />
            <UniversalPasswordInput
                placeholder = 'Password'
                ifProtected = {true}
                ifError = {errors.passwordE}
                elementRef = {password}
            />
            <CmsLoginSubmitButton>
                Login
            </CmsLoginSubmitButton>
        </CmsLoginFormContainer>
    );
};

export default CmsLoginForm;