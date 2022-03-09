/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectProductionSection.styles.ts
 * Last modified: 07/03/2022, 01:13
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

export const ProjectProductionSectionContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.$colours.mainBackground};
    min-height: 300px;
    overflow: hidden;
`;

export const ProjectProductionSectionLeftContentContainer = styled.div`
    padding: 50px 0;
    @media only screen and (max-width: 1030px) {
        padding: 50px 0 0;
    }
`;

export const ProjectProductionMonitorRightContentContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    width: 60%;
    height: 80%;
    border-radius: 30px;
    right: -10%;
    background-color: var(--pureBlack);
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const ProjectProductionMonitorRightContentImage = styled.img`
    position: absolute;
    border: 30px solid var(--pureBlack);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    :nth-of-type(2) {
        animation: projectImagesSlider 6s infinite linear;
    }
    @keyframes projectImagesSlider {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;