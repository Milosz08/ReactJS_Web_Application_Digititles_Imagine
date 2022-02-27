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