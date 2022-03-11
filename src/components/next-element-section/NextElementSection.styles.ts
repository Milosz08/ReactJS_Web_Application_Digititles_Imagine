/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NextElementSection.styles.ts
 * Last modified: 07/03/2022, 01:19
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
import { footer_scroll_link_rs } from '../../styles/reset.styles';

export const NextElementSectionContainer = styled(footer_scroll_link_rs)`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--${({ theme }) => theme.$ifWhite ? 'whiteClean' : 'blackDarken'});
    height: 220px;
`;

export const NextElementLeftContent = styled.div`
    padding-right: 50px;
    align-self: center;
    @media only screen and (max-width: 1030px) {
        padding-right: 0;
    }
`;

export const NextElementLeftContentHeader = styled.h3`
    color: var(--${({ theme }) => theme.$ifWhite ? 'blackLight' : 'whiteClean'});
    font-size: 3.7rem;
    text-align: right;
    line-height: .9;
    margin-bottom: 20px;
    text-transform: ${({ theme }) => theme.$ifWhite ? 'initial' : 'capitalize'} ;
    ::after {
        content: '.';
        color: ${({ theme }) => theme.$projectDotColor};
    }
    @media only screen and (max-width: 1258px) {
        max-width: 500px;
    }
    @media only screen and (max-width: 1030px) {
        width: 100%;
        max-width: 100%;
        text-align: center;
        font-size: 3rem;
    }
`;

export const NextElementLeftContentAside = styled.aside`
    color: var(--${({ theme }) => theme.$ifWhite ? 'grayDark' : 'blackLight'});
    text-transform: uppercase;
    text-align: right;
    font-size: 1.3rem;
    font-weight: 500;
    @media only screen and (max-width: 1030px) {
        text-align: center;
    }
`;

export const NextElementRightArrowContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const NextElementRightArrowElement = styled.div<{ $extraDelay: number }>`
    position: relative;
    width: 50px;
    height: 81px;
    margin: 30px 0 0 ${({ $extraDelay }) => $extraDelay ? 25 : 30}px;
    background-color: var(--${({ theme }) => theme.$ifWhite ? 'cyanDark' : 'cyanLight'});
    transform: skewX(30deg);
    animation: arrowAnim 4s ${({ $extraDelay }) => $extraDelay ? `.${$extraDelay * 2}s` : 'none'} infinite;
    ::after {
        content: '';
        position: absolute;
        background-color: var(--${({ theme }) => theme.$ifWhite ? 'cyanDark' : 'cyanLight'});
        transform: translateX(0px) skewX(-50deg);
        width: 100%;
        height: 100%;
        top: 80px;
        left: -48px;
    }
    @keyframes arrowAnim {
        0% {
            transform: translateX(0) skewX(30deg);
        }
        11% {
            transform: translateX(80px) skewX(30deg);
        }
        22% {
            transform: translateX(80px) skewX(30deg);
            opacity: 0;
        }
        66% {
            transform: translateX(0) skewX(30deg);
        }
    }
`;