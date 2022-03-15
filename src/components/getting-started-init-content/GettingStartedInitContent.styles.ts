/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GettingStartedInitContent.styles.ts
 * Last modified: 13/03/2022, 13:21
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

import { button_rs } from '../../styles/reset.styles';
import { ParagraphElementStyled } from '../universal-components/UniversalComponents.styles';

export const GettingStartedInitContentContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    @media only screen and (max-width: 1030px) {
        position: static;
    }
`;

export const GettingStartedLeftBar = styled(button_rs)`
    width: 300px;
    height: 100vh;
    background-color: var(--cyanDark);
    position: fixed;
    overflow: hidden;
    left: 20vw;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-20px);
    :hover div {
        :nth-child(1) {
            left: 70px;
        }
        :nth-child(2) {
            left: 210px;
        }
    }
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const GettingStartedArrowFirst = styled.div`
    position: absolute;
    bottom: 50px;
    left: -80px;
    width: 80px;
    height: 110px;
    background-color: var(--whiteClean);
    border: 1px solid var(--whiteClean);
    transform: skewX(-40deg);
    transition: .4s;
    ::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid var(--whiteClean);
        background-color: var(--whiteClean);
        top: -103%;
        left: -119%;
        transform: skewX(59deg);
    }
`;

export const GettingStartedArrowSecond = styled(GettingStartedArrowFirst)`
    left: -90px;
`;

export const GettingStartedTextContainer = styled.div`
    margin-left: calc(20vw + 350px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 1030px) {
        width: calc(100% - 60px);
        margin: 0 30px;
    }
`;

export const GettingStartedH2 = styled.h2`
    font-size: 4.4rem;
    margin-bottom: 70px;
    max-width: 700px;
    margin-right: 20px;
    line-height: 1.1;
    color: var(--blackLight);
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    @media only screen and (max-width: 1030px) {
        margin-right: 0;
        font-size: 2.5rem;
        opacity: 1;
        visibility: initial;
        transform: translateY(0);
    }
`;

export const GettingStartedAnimatedTitleContainer = styled.div`
    height: 80px;
    width: 500px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    color: var(--cyanDark);
    transform: translateY(20px);
    @media only screen and (max-width: 1030px) {
        height: 40px;
        width: 250px;
        transform: translateY(8px);
    }
`;

export const GettingStartedSingleRowTitle = styled.div`
    display: flex;
    position: absolute;
`;

export const GettingStartedTitleCharContainer = styled.span`
    min-width: 15px;
    @media only screen and (max-width: 1030px) {
        min-width: 6px;
    }
`;

export const GettingStartedTitleDot = styled(GettingStartedTitleCharContainer)`
    color: var(--cyanLight);
`;

export const GettingStartedParagraph = styled(ParagraphElementStyled)`
    margin-right: 20px;
    max-width: 500px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    @media only screen and (max-width: 1030px) {
        opacity: 1;
        visibility: initial;
        transform: translateY(0);
    }
   
`;

export const GettingStartedRightNavbarContainer = styled.nav`
    position: fixed;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-30px);
    z-index: 1;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100vh;
    padding: 0 70px;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const GettingStartedRightNavbarElement = styled(button_rs)<{ $ifActive: boolean }>`
    color: var(--${({ $ifActive }) => $ifActive ? 'whiteClean' : 'cyanLight'});
    font-size: 1.5rem;
    font-weight: 500;
    transition: .3s;
    margin: 30px 0;
`;