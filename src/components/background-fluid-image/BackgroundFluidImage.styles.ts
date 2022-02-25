/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: BackgroundFluidImage.styles.ts
 * Last modified: 25/02/2022, 10:28
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

import styled, { css } from 'styled-components';

const HideContentOnLoad = () => css`
    transform: translateX(100%);
`;

export const BackgroundFluidImageContainer = styled.div<{ $ifFixed: boolean }>`
    position: ${({ $ifFixed }) => $ifFixed ? 'fixed' : 'absolute'};
    display: flex;
    align-items: flex-end;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100vh;
`;

export const BackgroundFluidImageStyles = styled.img`
    width: 100%;
    ${HideContentOnLoad()};
`;

export const BackgroundFluidImageTriangle = styled.div<{ $ifVisible: boolean }>`
    position: absolute;
    display: ${({ $ifVisible }) => $ifVisible ? 'block' : 'none'};
    z-index: 10;
    width: 100px;
    height: 50px;
    border-left: 20vw solid transparent;
    border-bottom: 25vh solid var(--cyanDarker);
    opacity: .8;
    bottom: 0;
    right: 0;
    will-change: transform;
    ${HideContentOnLoad()};
`;