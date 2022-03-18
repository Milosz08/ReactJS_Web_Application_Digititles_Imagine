/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GettingStartedFormStructure.styles.ts
 * Last modified: 13/03/2022, 13:09
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

import { StandardButton } from '../../styles/mixins.styles';
import { a_rs, button_rs } from '../../styles/reset.styles';
import { ParagraphElementStyled } from '../universal-components/UniversalComponents.styles';

export const HideAllAnimation = (hide?: boolean) => css`
    visibility: ${hide ? 'hidden' : 'initial'};
    opacity: ${hide ? 0 : 1};
    transform: translateY(${hide ? 30 : 0}px);
`;

export const GettingStartedFormStructureContainer = styled.form`
    width: calc(100% - 300px);
    margin-right: 300px;
    @media only screen and (max-width: 1030px) {
        margin: 0 30px;
        width: calc(100% - 60px);
    }
`;

export const GettingStartedFromSingleSection = styled.section<{ $marginTop: number }>`
    width: 100%;
    min-height: ${({ $marginTop }) => $marginTop ? `calc(100vh - ${$marginTop}px)` : '100vh'};
    display: none;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1200px) {
        padding-top: 50px;
    }
`;

export const GettingStartedFromSingleSectionServices = styled(GettingStartedFromSingleSection)`
    display: flex;
`;

export const GettingStartedNotImagesSectionContainer = styled.div`
    max-width: 1000px;
    width: 100%;
`;

export const GettingStartedNotImagesContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GettingStartedBudgetParagraph = styled(ParagraphElementStyled)`
    max-width: 1000px;
    text-align: center;
    ${HideAllAnimation(true)};
    @media only screen and (max-width: 1030px) {
        ${HideAllAnimation(false)};
    }
`;

export const GettingStartedLinkElement = styled(a_rs)`
    font-size: var(--paragraphFontSize);
    color: var(--cyanDark);
    text-decoration: underline;
`;

export const ImagesWithTextHeader = styled.h3`
    text-align: center;
    font-size: 5rem;
    margin-bottom: 70px;
    color: var(--blackLight);
    line-height: 1;
    ${HideAllAnimation(true)};
    ::after {
        content: '?';
        color: var(--cyanLight);
    }
    @media only screen and (max-width: 1030px) {
        ${HideAllAnimation(false)};
    }
    @media only screen and (max-width: 1200px) {
        font-size: 4rem;
    }
    @media only screen and (max-width: 776px) {
        font-size: 3rem;
    }
`;

export const GettingStartedButtonElement = styled(button_rs)`
    ${StandardButton()};
    margin-bottom: 50px;
    ${HideAllAnimation(true)};
    @media only screen and (max-width: 1030px) {
        ${HideAllAnimation(false)};
    }
`;