/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: global.styles.ts
 * Last modified: 21/02/2022, 18:39
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

import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProvider {
    $ifIsGettingStarted: boolean;
    $ifCookieNotifIsActive: boolean;
    $marginFromTop: number;
}

const GlobalStylesInjection = createGlobalStyle<GlobalStylesProvider>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: -.02rem;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'C', sans-serif;
    }
    body {
        position: relative;
    }
    #root {
        position: relative;
        margin-bottom: ${({ $ifIsGettingStarted }) => $ifIsGettingStarted ? 0 : '600px'};
        margin-top: ${({ $ifCookieNotifIsActive, $marginFromTop }) => $ifCookieNotifIsActive ? 0 : `${$marginFromTop}px`};
        min-height: ${({ $marginFromTop }) => $marginFromTop ? `calc(100vh - ${$marginFromTop}px)` : '100vh'};
        background-color: var(--whiteClean);
        transition: ${({ $ifCookieNotifIsActive }) => $ifCookieNotifIsActive ? '.3s margin-top ease-in-out' : 'none'};
        @media only screen and (max-width: 760px) {
            margin-bottom: 0;
        }
    }
    strong {
        color: inherit;
        font-weight: 500;
    }
    option {
        text-transform: capitalize;
    }
    :root {
        --whiteClean: #fefefe;
        --whiteDark: #f7f7f7;
        --pureBlack: #000000;
        --blackLight: #444444;
        --blackDark: #1f1f1f;
        --blackDarken: #242424;
        --grayDarker: #8f8f8f;
        --grayDark: #bcbfc5;
        --grayLight: #dcdddf;
        --grayLighter: #eeeeee;
        --cyanDarker: #1b363d;
        --cyanDark: #2c5662;
        --cyanLight: #648e99;
        --redLight: #de4545;
        --redDark: #9d0909;
        --redDarken: #6e0707;
        --greenDark: #116011;
        --orangeDark: #eca305;
        
        --headerFontSize: 4rem;
        --biggerHeaderFontSize: 5rem;
        --paragraphFontSize: 1.4rem;
        --scrollBarColor: #f0f0f0;
        --basicBoxShadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        --blockBoxShadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        --modalBackground: rgba(0, 0, 0, .5);
        
        @media only screen and (min-width: 1921px) {
            --headerFontSize: 4rem;
        }
        @media only screen and (max-width: 1400px) {
            --headerFontSize: 4vw;
        }
        @media only screen and (max-width: 1030px) {
            --headerFontSize: 3.5rem;
            --paragraphFontSize: 1.2rem;
        }
        
        @keyframes scrollLine {
            0% {
                transform: scale(1, 0);
                transform-origin: left top;
            }
            40% {
                transform: scale(1, 0);
                transform-origin: left top;
            }
            80% {
                transform: scale(1, 1);
                transform-origin: left top;
            }
            80.1% {
                transform: scale(1, 1);
                transform-origin: left bottom;
            }
            100% {
                transform: scale(1, 0);
                transform-origin: left bottom;
            }
        }
    }
`;

export default GlobalStylesInjection;