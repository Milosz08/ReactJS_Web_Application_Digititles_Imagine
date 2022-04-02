/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsMarkMessageAsViewed.styles.ts
 * Last modified: 02/04/2022, 20:32
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

export const CmsMarkMessageAsViewedContainer = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    cursor: ${({ theme }) => theme.$ifDisabled ? 'not-allowed' : 'pointer'};
`;

export const CmsMarkMessageAsViewedCheckboxInput = styled(input_rs)`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    :checked {
        ~ span {
            background-color: var(--cyanDark);
        }
        ~ span::after {
            display: block;
        }
    }
    :disabled {
        ~ span {
            background-color: var(--grayLight);
        }
    }
`;

export const CmsMarkMessageAsViewedCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    background-color: var(--grayLighter);
    ::after {
        content: "";
        position: absolute;
        display: none;
        left: 7px;
        top: 3px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

export const CmsMarkMessageAsViewedLabelText = styled.div`
    margin-left: 35px;
    color: var(--${({ theme }) => theme.$ifDisabled ? 'grayLight' : 'blackLight'});
`;