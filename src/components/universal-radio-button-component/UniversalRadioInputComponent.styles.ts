/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: UniversalRadioInputComponent.styles.ts
 * Last modified: 03/04/2022, 12:00
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
import { input_rs } from '../../styles/reset.styles';

export const UniversalRadioInputComponentContainer = styled.label`
    position: relative;
    user-select: none;
    display: flex;
    align-items: center;
    margin: 0 30px;
    cursor: pointer;
    padding-left: 20px;
`;

export const UniversalRadioInputComponentInputElement = styled(input_rs)`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    :checked ~ span {
        border-color: var(--cyanDark);
        ::after {
            transform: scale(1);
        }
    }
`;

export const UniversalRadioInputComponentCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid var(--grayDark);
    border-radius: 50%;
    :after {
        content: '';
        position: absolute;
        transform: scale(0);
        top: 4px;
        left: 4px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--cyanDark);
        transition: .2s transform ease-in-out;
    }
`;

export const UniversalRadioInputComponentTextContent = styled.p`
    margin-left: 15px;
    font-size: 1.2rem;
    color: var(--blackLight);
`;