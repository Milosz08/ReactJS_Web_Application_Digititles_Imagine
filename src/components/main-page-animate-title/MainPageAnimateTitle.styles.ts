/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainPageAnimateTitle.styles.ts
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

export const MainPageAnimationTitleContainer = styled.main<{ $ifHide: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size: 3.1rem;
    font-weight: 700;
    padding-left: 200px;
    opacity: ${({ $ifHide }) => $ifHide ? 0 : 1};
    will-change: opacity;
    z-index: 0;
    @media only screen and (max-width: 1320px) {
        font-size: 2.2rem;
    }
    @media only screen and (max-width: 1030px) {
        width: fit-content;
        margin: 0 auto;
        padding-left: 0;
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 570px) {
        width: calc(100% - 60px);
        margin: 0 30px;
        font-size: 1.3rem;
    }
`;

export const MainPageAnimationTitleHeader = styled.h1`
    color: var(--cyanDark);
`;

export const MainPageAnimationTitlesContainer = styled.div`
    margin-top: 30px;
    font-size: 6rem;
    line-height: 1.6;
    color: var(--blackLight);
    @media only screen and (max-width: 1320px) {
        font-size: 4rem;
    }
    @media only screen and (max-width: 1030px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 570px) {
        font-size: 1.6rem;
    }
`;

export const MainPageAnimationTitlesSingleRowGroup = styled.div`
    height: 100px;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width: 1320px) {
        height: 70px;
    }
    @media only screen and (max-width: 1030px) {
        height: 45px;
    }
    @media only screen and (max-width: 570px) {
        height: 30px;
    }
`;

export const TitlesSingleTitleInRow = styled.div`
    display: flex;
    position: absolute;
    transform: translateY(-35px);
    @media only screen and (max-width: 1320px) {
        transform: translateY(-15px);
    }
    @media only screen and (max-width: 570px) {
        transform: translateY(-5px);
    }
`;

export const TitlesSingleTitleCharContainer = styled.span`
    min-width: 25px;
    @media only screen and (max-width: 1320px) {
        min-width: 15px;
    }
    @media only screen and (max-width: 1030px) {
        min-width: 10px;
    }
    @media only screen and (max-width: 570px) {
        min-width: 4px;
    }
`;

export const DotContainer = styled(TitlesSingleTitleCharContainer)`
    color: var(--cyanLight);
`;