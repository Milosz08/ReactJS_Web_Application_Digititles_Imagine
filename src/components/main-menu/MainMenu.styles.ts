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
    padding: 50px 0;
    z-index: 5;
    overflow-y: auto;
    @media only screen and (max-width: 760px) {
        display: block;
        padding: 80px 30px 30px;
    }
`;

export const MainMenuSingleSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    max-width: 420px;
    margin: 0 30px;
    @media only screen and (max-width: 760px) {
        width: 100%;
        margin: 20px 0;
    }
`;

export const MainMenuLeftSingleSectionContainer = styled(MainMenuSingleSectionContainer)`
    min-width: 360px;
    @media only screen and (max-width: 720px) {
        min-width: 100%;
    }
`;

export const MainMenuCenterSingleSectionContainer = styled(MainMenuSingleSectionContainer)`
    flex-grow: 1;
    max-width: 420px;
`;

export const MainMenuRightSingleSectionContainer = styled(MainMenuSingleSectionContainer)`
    max-width: 300px;
    @media only screen and (max-width: 1160px) {
        display: none;
    }
    @media only screen and (max-width: 760px) {
        display: flex;
    }
`;

export const MainMenuRightEmailSectionContainer = styled.div`
    margin: 10px 0 50px;
    font-size: var(--paragraphFontSize);
    font-weight: 500;
    @media only screen and (max-width: 500px) {
        margin: 10px 0;
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
        width: 50px;
        height: 2px;
        background-color: var(--cyanLight);
    }
    @media only screen and (max-width: 760px) {
        margin: 40px 0 30px;
    }
`;

export const MainMenuMainLinks = styled(delay_link_rs)`
    font-size: 3rem;
    font-weight: 500;
    color: var(--whiteClean);
    text-transform: capitalize;
    transition: .2s;
    margin-bottom: 10px;
    width: fit-content;
    :hover {
        color: var(--blackDark);
    }
    @media only screen and (max-width: 500px) {
        font-size: 2.5rem;
    }
`;

export const MainMenuParagraphElement = styled.p`
    font-size: 1.2rem;
    color: var(--whiteClean);
`;

export const MainMenuProjectsList = styled.ul`
    list-style-type: none;
`;

export const MainMenuSingleProjectInListContainer = styled.li``;

export const MainMenuProjectSingleElement = styled(delay_link_rs)`
    color: var(--whiteClean);
    width: fit-content;
    font-size: 2rem;
    margin: 3px 0;
    font-weight: 500;
    transition: .2s;
    line-height: 1.3;
    :hover {
        color: var(--blackDark);
    }
    @media only screen and (max-width: 500px) {
        font-size: 1.6rem;
        line-height: 1.1;
        display: block;
        padding: 7px 0;
    }
`;