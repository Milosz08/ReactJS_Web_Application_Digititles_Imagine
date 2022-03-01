/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainMenu.styles.ts
 * Last modified: 25/02/2022, 01:04
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
import { delay_link_rs } from '../../styles/reset.styles';

export const MainMenuContainer = styled.main<{ $ifActive: boolean }>`
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: var(--cyanDark);
    transform: translateY(${({ $ifActive }) => $ifActive ? 0 : '-100vh'});
    opacity: ${({ $ifActive }) => $ifActive ? 1 : 0};
    transition: .6s all cubic-bezier(.56, 0, .46, 1);
    padding: 0 50px;
    z-index: 4;
    overflow-y: auto;
    @media only screen and (max-width: 760px) {
        display: block;
        padding: 80px 30px 30px;
    }
`;

export const MainMenuSingleSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 400px;
    max-width: 420px;
    @media only screen and (max-width: 760px) {
        width: 100%;
        margin: 20px 0;
    }
`;

export const MainMenuCenterSingleSectionContainer = styled(MainMenuSingleSectionContainer)`
    @media only screen and (max-width: 1030px) {
        display: none;
    }
    @media only screen and (max-width: 760px) {
        display: flex;
    }
`;

export const MainMenuHeaderElement = styled.h3<{ $ifMarginTop?: boolean }>`
    position: relative;
    font-size: var(--paragraphFontSize);
    color: var(--cyanLight);
    font-weight: 400;
    text-transform: capitalize;
    margin: ${({ $ifMarginTop }) => $ifMarginTop ? 40 : 0}px 0 30px;
    width: fit-content;
    ::after {
        position: absolute;
        content: '';
        bottom : -10px;
        left: 0;
        width: 40%;
        height: 2px;
        background-color: var(--cyanLight);
    }
`;

export const MainMenuMainLinks = styled(delay_link_rs)`
    font-size: 3rem;
    font-weight: 500;
    color: var(--whiteClean);
    text-transform: capitalize;
    transition: .2s;
    margin-bottom: 10px;
    :hover {
        color: var(--blackDark);
    }
`;

export const MainMenuParagraphElement = styled.p`
    font-size: 1.2rem;
    color: var(--whiteClean);
`;