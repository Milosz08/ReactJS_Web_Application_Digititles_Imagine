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

const GlobalStylesInjection = createGlobalStyle`
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
        &.disable--scroll {
            overflow-y: hidden;
        }
    }
    #root {
        margin-bottom: 600px;
        min-height: 100vh;
        background-color: var(--whiteClean);
        @media only screen and (max-width: 760px) {
            margin-bottom: 0;
        }
    }
    :root {
        --whiteClean: #fefefe;
        --whiteDark: #f7f7f7;
        --blackLight: #444444;
        --blackDark: #1f1f1f;
        --blackDarken: #242424;
        --grayDarker: #8f8f8f;
        --grayDark: #bcbfc5;
        --grayLight: #dcdddf;
        --grayLighter: #dcdddf;
        --cyanDarker: #1b363d;
        --cyanDark: #2c5662;
        --cyanLight: #648e99;
        --redLight: #de4545;
        
        --headerFontSize: 4rem;
        --biggerHeaderFontSize: 5rem;
        --paragraphFontSize: 1.4rem;
    }
`;

export default GlobalStylesInjection;