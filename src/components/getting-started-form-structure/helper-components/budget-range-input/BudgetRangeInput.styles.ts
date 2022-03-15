/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: BudgetRangeInput.styles.ts
 * Last modified: 14/03/2022, 16:30
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

import { input_rs } from '../../../../styles/reset.styles';
import { HideAllAnimation } from '../../GettingStartedFormStructure.styles';

export const GettingStartedBudgetRangeLabel = styled.label`
    margin: 50px 0 100px;
    max-width: 500px;
    width: 100%;
    ${HideAllAnimation(true)};
    @media only screen and (max-width: 1030px) {
        ${HideAllAnimation(false)};
    }
`;

export const GettingStartedBudgetRangeInput = styled(input_rs)`
    appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: var(--grayLight);
    outline: none;
    ::-webkit-slider-thumb, ::-moz-range-thumb {
        appearance: none;
        border: none;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        background: var(--cyanDark);
        cursor: pointer;
    }
`;

export const GettingStartedBudgetPriceIndicator = styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--grayDarker);
`;