/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectInitialFluidContent.styles.ts
 * Last modified: 07/03/2022, 01:35
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

export const HeaderWithParagraphSectionContainer = styled.section`
    width: 50%;
    padding: 50px 0 50px 200px;
    @media only screen and (max-width: 1600px) {
        width: calc(50% - 100px);
        margin-right: 100px;
    }
    @media only screen and (max-width: 1400px) {
        padding: 50px 0 50px 100px;
    }
    @media only screen and (max-width: 1030px) {
        padding: 50px 0;
        width: calc(100% - 60px);
        margin: 0 30px;
    }
`;

export const ParagraphElement = styled.p`
    font-size: var(--paragraphFontSize);
    color: var(--grayDarker);
    max-width: 600px;
    margin: 30px 0;
    line-height: 1.3;
    strong {
        color: var(--cyanDark);
    }
    @media only screen and (max-width: 1030px) {
        max-width: 100%;
        margin-right: 0;
    }
`;

export const TechnicalBlocksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin: 50px 0 20px;
    @media only screen and (max-width: 1030px) {
        justify-content: space-around;
    }
`;

export const TechnicalBlockSingleElement = styled.div<{ $ifActive: boolean }>`
    padding: 7px 9px 6px;
    margin: 10px 9px;
    min-width: 50px;
    text-align: center;
    background-color: var(--blackLight);
    color: var(--whiteClean);
    border-radius: 6px;
    opacity: ${({ $ifActive }) => $ifActive ? 1 : .2 };
`;