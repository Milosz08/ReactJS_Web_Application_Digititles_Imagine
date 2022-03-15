/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormRegistration.styles.ts
 * Last modified: 14/03/2022, 21:53
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

import styled, { css } from 'styled-components';
import { HideAllAnimation } from '../../GettingStartedFormStructure.styles';
import { input_rs, textarea_rs } from '../../../../styles/reset.styles';

const InputWithTextarea = () => css`
    width: 100%;
    font-size: 1.3rem;
    text-align: center;
    background-color: var(--whiteDark);
    color: var(--blackLight);
    padding: 15px;
    border-bottom: 4px solid transparent;
    border-radius: 8px;
    box-sizing: border-box;
    transition: .2s border-bottom-color ease-in-out;
    ::placeholder {
        color: var(--grayDarker);
    }
    :focus {
        border-bottom: 4px solid var(--cyanDark);
    }
    @media only screen and (max-width: 776px) {
        font-size: 1.1rem;
    }
`;

export const FormRegistrationMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 50px 0;
    max-width: 900px;
    ${HideAllAnimation(true)};
    @media only screen and (max-width: 1030px) {
        ${HideAllAnimation(false)};
    }
`;

export const FormRegistrationHalfLengthLabelElement = styled.label`
    flex-basis: 45%;
    margin-bottom: 25px;
    @media only screen and (max-width: 776px) {
        flex-basis: 100%;
        margin-bottom: 15px;
    }
`;

export const FormRegistrationFullLengthLabelElement = styled(FormRegistrationHalfLengthLabelElement)`
    flex-basis: 100%;
`;

export const FormRegistrationInputElement = styled(input_rs)`
    ${InputWithTextarea()};
`;

export const FormRegistrationTextareaElement = styled(textarea_rs)`
    ${InputWithTextarea()};
`;

export const FormRegistrationDownInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const FormRegistrationDownInfoElement = styled.div`
    font-size: 1.1rem;
    color: var(--grayDark);
`;