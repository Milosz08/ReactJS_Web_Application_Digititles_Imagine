/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: modals.styles.ts
 * Last modified: 21/03/2022, 12:35
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

import { button_rs } from './reset.styles';
import { StandardButton } from './mixins.styles';

export const ModalContainer = styled.div`
    display: none;
    visibility: hidden;
    opacity: 0;
    justify-content: center;
    position: fixed;
    z-index: 9;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--modalBackground);
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    width: calc(100% - 60px);
    margin: 10vh 30px 0;
    height: fit-content;
    background-color: var(--whiteClean);
    border-radius: 10px;
    padding: 30px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-30px);
`;

export const ModalWarningIconContainer = styled.div`
    font-size: 5rem;
    color: var(--redDark);
`;

export const ModalHeader = styled.h3`
    font-size: 1.9rem;
    line-height: 1.1;
    text-align: center;
    color: var(--blackLight);
    max-width: 530px;
    width: 100%;
    margin: 10px 0;
    ::after {
        content: '!';
        color: var(--cyanLight);
    }
    strong {
        font-weight: inherit;
        color: var(--cyanLight);
    }
`;

export const ModalParagraph = styled.p`
    color: var(--grayDarker);
    font-size: 1.2rem;
    margin: 10px 0;
    max-width: 700px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
`;

export const ModalButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 700px;
    width: 100%;
`;

export const ModalButtonElement = styled(button_rs)<{ $ifHollow?: boolean }>`
    ${StandardButton()};
    width: 250px;
    font-size: 1.2rem;
    background-color: ${({ $ifHollow }) => $ifHollow ? 'transparent' : 'var(--cyanDark)'};
    color: var(--${({ $ifHollow }) => $ifHollow ? 'cyanDark' : 'whiteClean'});
    border: 1px solid ${({ $ifHollow }) => $ifHollow ? 'var(--cyanDark)' : 'transparent'};
    margin-top: 20px;
    :hover {
        background-color: ${({ $ifHollow }) => $ifHollow ? 'transparent' : 'var(--cyanDarker)'};
    }
`;