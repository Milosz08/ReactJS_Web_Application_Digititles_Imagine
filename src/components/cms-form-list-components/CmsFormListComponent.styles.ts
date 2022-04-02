/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsFormListComponent.styles.ts
 * Last modified: 02/04/2022, 18:15
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
import { a_rs, button_rs, ul_rs } from '../../styles/reset.styles';

const RegistrationFormButtonMixin = () => css`
    ${StandardButton()};
    font-size: 1.1rem;
    padding: 8px 20px 7px;
    margin-left: 20px;
    @media only screen and (max-width: 781px) {
        width: 100%;
        text-align: center;
        margin: 10px 0 0;
    }
`;

export const CmsListComponentContainer = styled(ul_rs)`
    width: 100%;
    margin-bottom: 100px;
`;

export const CmsFormSingleElementContainer = styled.li<{ $ifShowExtraContent: boolean }>`
    height: ${({ $ifShowExtraContent }) => $ifShowExtraContent ? 'fit-content' : '56px'};
    border: 1px solid var(--grayDark);
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: var(--blackLight);
    overflow: hidden;
`;

export const CmsFormDataSeparator = styled.span`
    width: calc(100% - 50px);
    margin: 0 25px;
    height: 1px;
    background-color: var(--grayDark);
    display: block;
`;

export const CmsFormExpandedDataContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    padding: 15px 25px;
`;

export const CmsFormExpandedPanelControlsContainer = styled.div<{ $ifEndFlexAlignment: boolean }>`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: ${({ $ifEndFlexAlignment }) => $ifEndFlexAlignment ? 'flex-end' : 'space-between'};
    align-items: center;
    margin: 20px 40px 0;
    @media only screen and (max-width: 956px) {
        margin: 20px 0 0;
        justify-content: center;
    }
`;

export const CmsFormExpandedPanelButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 781px) {
        margin-top: 30px;
        flex-wrap: wrap;
    }
`;

export const CmsFormExpandedPanelMailtoButton = styled(a_rs)`
    ${RegistrationFormButtonMixin()};
`;

export const CmsFormExpandedPanelRemoveButton = styled(button_rs)`
    ${RegistrationFormButtonMixin()};
    background-color: transparent;
    color: var(--cyanDark);
    border: 1px solid var(--cyanDark);
    :hover {
        background-color: transparent;
    }
`;

export const CmsFormExpandedDataSection = styled.div`
    flex-basis: 30%;
    margin: 0 60px;
    @media only screen and (max-width: 781px) {
        flex-basis: 100%;
        margin: 0;
    }
`;

export const CmsFormExpandedHeaderAndDataContainer = styled.div`
    margin: 10px 0;
    max-width: 400px;
    word-break: break-word;
`;

export const CmsFormExpandedHeader = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: var(--cyanDark);
`;

export const CmsFormExpandedDataContent = styled.p<{ $ifSetCapitalised?: boolean }>`
    text-transform: ${({ $ifSetCapitalised }) => $ifSetCapitalised ? 'capitalize' : 'none'};
    font-size: 1.3rem;
`;

export const CmsFormFormHeaderElement = styled.header`
    display: flex;
    width: 100%;
    padding: 15px 25px;
    height: 56px;
    @media only screen and (max-width: 956px) {
        justify-content: space-between;
    }
`;

export const CmFormFormSingleListElement = styled.div<{ $flexBasisValue?: number, $ifSetCapitalised?: boolean }>`
    flex-basis: ${({ $flexBasisValue }) => $flexBasisValue ? $flexBasisValue : 30}%;
    text-transform: ${({ $ifSetCapitalised }) => $ifSetCapitalised ? 'capitalize' : 'none'};
    @media only screen and (max-width: 956px) {
        flex-basis: ${({ $ifSetCapitalised }) => $ifSetCapitalised ? '100%' : 0};
    }
`;

export const CmsHeaderFormButtonsContainer = styled(CmFormFormSingleListElement)`
    display: flex;
    justify-content: space-around;
`;

export const CmsHeaderFormButton = styled(button_rs)`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--cyanDark);
    padding: 3px 10px;
`;

export const CmsHeaderFormRemoveButton = styled.span`
    position: relative;
    width: 21px;
    height: 2px;
    background-color: var(--redDark);
    transform: rotate(45deg);
    ::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: var(--redDark);
        left: 0;
        transform: rotate(90deg);
    }
`;

export const CmsHeaderInfoContainer = styled.li`
    display: flex;
    width: 100%;
    padding: 5px 25px;
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: var(--grayDark);
    font-weight: 400;
`;

export const CmsHeaderInfoSingleItemContainer = styled.div<{ $flexBasisValue?: number, }>`
    flex-basis: ${({ $flexBasisValue }) => $flexBasisValue ? $flexBasisValue : 30}%;
    @media only screen and (max-width: 956px) {
        flex-basis: 100%;
    }
`;

export const CmsHeaderViewedStatusWrapper = styled.span<{ $ifViewed: boolean }>`
    color: var(--${({ $ifViewed }) => $ifViewed ? 'greenDark' : 'redDark'});
`;