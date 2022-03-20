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

import styled from 'styled-components';
import { InputWithTextarea } from '../../../../styles/mixins.styles';
import { input_rs, textarea_rs } from '../../../../styles/reset.styles';

import { HideAllAnimation } from '../../GettingStartedFormStructure.styles';

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

export const FormRegistrationInputElement = styled(input_rs)<{ $ifError: boolean }>`
    ${({ $ifError }) => InputWithTextarea({ $ifError })};
`;

export const FormRegistrationTextareaElement = styled(textarea_rs)<{ $ifError: boolean }>`
    ${({ $ifError }) => InputWithTextarea({ $ifError })};
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