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
`;

export const MainPageAnimationTitleHeader = styled.h1`
    color: var(--cyanDark);
`;

export const MainPageAnimationTitlesContainer = styled.div`
    margin-top: 30px;
    font-size: 6rem;
    line-height: 1.6;
    color: var(--blackLight);
`;

export const MainPageAnimationTitlesSingleRowGroup = styled.div`
    height: 100px;
    overflow: hidden;
    position: relative;
`;

export const TitlesSingleTitleInRow = styled.div`
    display: flex;
    position: absolute;
    transform: translateY(-35px);
`;

export const TitlesSingleTitleCharContainer = styled.span`
    min-width: 25px;
`;

export const DotContainer = styled(TitlesSingleTitleCharContainer)`
    color: var(--cyanLight);
`;