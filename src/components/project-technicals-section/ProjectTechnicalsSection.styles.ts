/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectTechnicalsSection.styles.ts
 * Last modified: 07/03/2022, 01:16
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

export const ProjectTechnicalsSectionContainer = styled.section`
    width: 100%;
    background-color: var(--blackDark);
    display: flex;
    justify-content: space-between;
    padding: 0 200px;
    @media only screen and (max-width: 1800px) {
        padding: 0 50px 0 200px;
    }
    @media only screen and (max-width: 1600px) {
        padding: 0 50px 0 100px;
    }
    @media only screen and (max-width: 1030px) {
        padding: 100px 30px;
        flex-direction: column-reverse;
    }
`;

export const ProjectTechnicalsSectionLeftYoutube = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    @media only screen and (max-width: 1030px) {
        display: block;
        height: calc((100vw * 9) / 16);
    }
`;

export const ProjectTechnicalsSectionLeftEmbedContainer = styled.div`
    width: 40vw;
    height: calc(40vw * 9 / 16);
    position: relative;
    @media only screen and (max-width: 1030px) {
        padding: 50px 0 0 0;
        width: 100%;
        height: calc((100vw * 9) / 16);
    }
`;

export const ProjectTechnicalsSectionLeftYoutubeIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
    position: relative;
    z-index: 1;
`;

export const ProjectTechnicalsSectionLeftEmbedBorderElement = styled.aside`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cyanLight);
    top: 10px;
    left: 10px;
    border-radius: 8px;
    box-shadow: var(--basicBoxShadow);
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const ProjectTechnicalsSectionRightTech = styled.div`
    margin: 100px 0;
    width: 600px;
    @media only screen and (max-width: 1600px) {
        width: 50%;
    }
    @media only screen and (max-width: 1030px) {
        margin: 0;
        max-width: 600px;
        width: 100%;
    }
`;

export const ProjectTechnicalsSectionParagraphContainer = styled.div`
    margin-bottom: 20px;
`;

export const ProjectTechnicalsSectionSingleLineContainer = styled.p`
    display: flex;
    flex-wrap: wrap;
    font-size: var(--paragraphFontSize);
    color: var(--whiteClean);
`;

export const ProjectTechnicalsSectionSingleLineDescription = styled.span`
    display: inline-block;
    margin-right: 10px;
    color: var(--grayDarker);
`;

export const ProjectCompositeSingleColourContainer = styled.span`
    display: flex;
`;

export const ProjectCompositeSingleColour = styled.span<{ $bgcColour: string, $forColour: string }>`
    display: inline-block;
    background-color: ${({ $bgcColour }) => $bgcColour || 'var(--cyanLight)'};
    color: ${({ $forColour }) => $forColour};
    padding: 1px 4px;
    margin: 0 2px;
    border-radius: 3px;
    text-transform: lowercase;
`;

export const ProjectCompositeCommaElement = styled.span`
    margin-right: 4px;
`;