/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NavigationScrollTop.styles.ts
 * Last modified: 23/02/2022, 20:46
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

import { HideElementOnLoad } from '../../styles/mixins.styles';

export const NavigationScrollTopContainer = styled.nav<{ $ifFixed: boolean }>`
    position: ${({ $ifFixed }) => $ifFixed ? 'fixed' : 'absolute'};
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--grayDark);
    transition: .2s;
    background-color: transparent;
    bottom: 150px;
    height: 80px;
    left: 40px;
    transform-origin: left;
    transform: rotate(90deg);
    z-index: 4;
    ${HideElementOnLoad()};
    cursor: pointer;
    :hover {
        color: var(--cyanDark);
    }
    @media only screen and (max-width: 1030px) {
        display: none !important;
    }
`;

export const NavigationScrollTopProgressBar = styled.div`
    position: relative;
    width: 4px;
    height: 100%;
    background-color: var(--grayLight);
    margin-left: 20px;
`;

export const NavigationScrollTopProgressBarActive = styled.div.attrs<{ $percentageFill: number }>(props => ({
    style: { height: `${props.$percentageFill}%` }
}))<{ $percentageFill: number }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--cyanDark);
`;