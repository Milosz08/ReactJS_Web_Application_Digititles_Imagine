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

export const BackgroundFluidImageContainer = styled.div<{ $ifFixed: boolean, $ifScrollDisabled: number | null }>`
    position: ${({ $ifFixed }) => $ifFixed ? 'fixed' : 'absolute'};
    display: flex;
    align-items: flex-end;
    width: ${({ $ifScrollDisabled }) => $ifScrollDisabled ? `calc(50% - ${($ifScrollDisabled + 1) / 2}px)` : '50%'};
    right: ${({ $ifScrollDisabled }) => $ifScrollDisabled ? `${$ifScrollDisabled}px` : 0};
    bottom: ${({ $ifScrollDisabled }) => $ifScrollDisabled ? '600px' : 0};
    height: 100vh;
    overflow: hidden;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const BackgroundFluidBasicImageContainer = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 1;
    right: 0;
    bottom: 0;
`;

export const BackgroundFluidImageStyles = styled.img`
    width: 100%;
    height: auto;
    ${({ theme }) => !theme.$notHide && HideContentOnLoad()};
`;

export const BackgroundFluidBasicImageStyles = styled.img`
    position: absolute;
    display: block;
    width: 80%;
    height: 80%;
    bottom: 0;
    right: 0;
    transform: translateX(-70px);
    opacity: 0;
    visibility: hidden;
    transition: .4s;
`;

export const ProjectsFluidImageStyles = styled(BackgroundFluidBasicImageStyles)`
    width: 100%;
    height: initial;
    transform: translateX(-100px);
`;

export const BackgroundFluidImageTriangle = styled.div`
    position: absolute;
    z-index: 3;
    width: 100px;
    height: 50px;
    border-left: 20vw solid transparent;
    border-bottom: 10vw solid var(--cyanDarker);
    opacity: .8;
    bottom: 0;
    right: 0;
    will-change: transform;
    ${({ theme }) => !theme.$notHide && HideContentOnLoad()};
`;