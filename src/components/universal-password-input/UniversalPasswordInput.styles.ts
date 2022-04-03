/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: UniversalPasswordInput.styles.ts
 * Last modified: 20/03/2022, 20:50
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

import { button_rs, input_rs } from '../../styles/reset.styles';
import { InputWithTextarea } from '../../styles/mixins.styles';

export const UniversalPasswordInputLabel = styled.label`
    position: relative;
    width: 100%;
`;

export const UniversalPasswordInputElement = styled(input_rs)<{ $ifError: boolean }>`
    ${({ $ifError }) => InputWithTextarea({ $ifError })};
    margin-bottom: 20px;
`;

export const UniversalPasswordButtonChangeVisibility = styled(button_rs)<{ $ifError: boolean }>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 15px;
    width: 40px;
    height: 40px;
    color: var(--${({ $ifError }) => $ifError ? 'redDark' : 'grayDarker'});
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
`;