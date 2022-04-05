/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Footer.styles.ts
 * Last modified: 23/02/2022, 23:46
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

import { a_rs, footer_scroll_link_rs } from '../../styles/reset.styles';
import { BasicButtonWithBottomLine } from '../../styles/mixins.styles';

const FooterBlocksInitialState = () => css`
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
`;

const FooterBlocksNoAnimationInitialState = () => css`
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateY(0) !important;
`;

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
    background-color: var(--blackDark);
    color: var(--grayDarker);
    font-size: 1.1rem;
    padding: 0 100px;
    @media only screen and (max-width: 1121px) {
        padding: 0 30px;
    }
    @media only screen and (max-width: 760px) {
        position: static;
        height: auto;
    }
`;

export const FooterThreeContentBlocksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    width: 100%;
    @media only screen and (max-width: 760px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterSingleSectionContainer = styled.section`
    flex-basis: calc(100% / 3);
    max-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${FooterBlocksInitialState()};
    transition: .6s;
    @media only screen and (max-width: 877px) {
        flex-basis: calc(100% / 2);
        margin: 0 20px;
    }
    @media only screen and (max-width: 760px) {
        margin: 0;
        flex-basis: 100%;
        ${FooterBlocksNoAnimationInitialState()};
    }
`;

export const FooterSingleSectionTopContainer = styled(FooterSingleSectionContainer)`
    @media only screen and (max-width: 1345px) {
        display: none;
    }
    @media only screen and (max-width: 760px) {
        display: flex;
    }
`;

export const FooterCopyrightSectionContainer = styled.section`
    width: 80%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${FooterBlocksInitialState()};
    transition: .6s;
    @media only screen and (max-width: 1121px) {
        height: 140px;
    }
    @media only screen and (max-width: 877px) {
        width: 100%;
    }
    @media only screen and (max-width: 760px) {
        flex-direction: column-reverse;
        margin: 30px 0;
        height: auto;
        ${FooterBlocksNoAnimationInitialState()};
    }
`;

export const FooterHeadlight = styled.header`
    font-size: 1.8rem;
    padding: 50px 0 14px 0;
    font-weight: 600;
    color: var(--grayDark);
    ::after {
        content: '.';
        color: var(--cyanLight);
        font-size: 1.2em;
        padding-left: 2px;
    }
`;

export const FooterArticle = styled.article`
    font-size: 1.1rem;
    line-height: 1.4;
    letter-spacing: 0;
    font-weight: 400;
`;

export const FooterMailToContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.$ifIsMenu ? 'var(--whiteClean)' : 'inherit'};
    font-size: ${({ theme }) => theme.$ifIsMenu ? '1.5rem' : 'inherit'};
    width: fit-content;
    transition: .2s color ease-in-out;
    :hover {
        text-decoration: ${({ theme }) => theme.$ifIsMenu ? 'none' : 'underline'};
        color: ${({ theme }) => theme.$ifIsMenu ? 'var(--blackDark)' : 'inherit'};
    }
`;

export const FooterMailToLinks = styled(a_rs)`
    margin-left: 10px;
    font-size: ${({ theme }) => theme.$ifIsMenu ? 'var(--paragraphFontSize)' : '1.1rem'};;
    line-height: 1.5;
    color: inherit;
`;

export const FooterSimpleAnchorLink = styled(a_rs)`
    color: var(--cyanLight);
    margin: 0 30px;
    :hover {
        text-decoration: underline;
    }
    @media only screen and (max-width: 760px) {
        margin: 10px 0;
    }
`;

export const FooterGotoGettingStarted = styled(footer_scroll_link_rs)`
    ${BasicButtonWithBottomLine({ $isLeft: true })};
`;

export const FooterSectionCopyContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 760px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 20px;
    }
`;

export const FooterSectionSocialsContainer = styled.div`
    display: flex;
`;

export const FooterSectionCopySingleSectionElement = styled.div`
    margin: 0 15px;
    font-size: 1.1rem;
    letter-spacing: normal;
    @media only screen and (max-width: 760px) {
        margin: 10px 0;
    }
`;

export const FooterSectionCopySingleSectionLink = styled(footer_scroll_link_rs)`
    color: var(--cyanLight);
    margin: 0 30px;
    :hover {
        text-decoration: underline;
    }
    @media only screen and (max-width: 760px) {
        margin: 10px 0;
    }
`;

export const FooterSectionCopySocialMediaLink = styled(a_rs)<{ $ifWhiteColor: boolean }>`
    font-size: ${({ $ifWhiteColor }) => $ifWhiteColor ? 2 : 1.6}rem;
    padding: 5px;
    margin: 0 20px;
    color: ${({ $ifWhiteColor }) => $ifWhiteColor ? 'var(--whiteClean)' : 'inherit'};
    transition: .2s color ease-in-out;
    :hover {
        color: ${({ $ifWhiteColor }) => $ifWhiteColor ? 'var(--blackDark)' : 'inherit'};
    }
`;