/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: SubpagesLeftContent.styles.ts
 * Last modified: 28/02/2022, 17:49
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
import { ParagraphElementStyled } from '../universal-components/UniversalComponents.styles';

export const SubpagesMainContentUniversalContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 200px;
    max-width: 45vw;
    background-color: var(--whiteClean);
    @media only screen and (max-width: 1400px) {
        padding-left: 100px;
    }
    @media only screen and (max-width: 1030px) {
        align-items: center;
        padding-left: 0;
        margin: 0 30px;
        max-width: calc(100% - 60px);
        width: calc(100% - 60px);
    }
`;

export const SubpagesMainContentFormContainer = styled(SubpagesMainContentUniversalContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: initial;
    max-width: 50%;
    padding-left: 0;
    visibility: hidden;
    @media only screen and (max-width: 1030px) {
        padding-left: 0;
        margin: 0 30px;
        max-width: calc(100% - 60px);
    }
`;

export const SubpagesMainContentImageAndTitleContainer = styled.div`
    opacity: ${({ theme }) => theme.$hideOnLoad ? 0 : 1};
    visibility: ${({ theme }) => theme.$hideOnLoad ? 'hidden' : 'visible'};
    @media only screen and (max-width: 1030px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const SubpagesMainContentTitle = styled.h3<{ $color: string }>`
    position: relative;
    margin-bottom: 0;
    line-height: 1;
    word-break: break-word;
    font-size: 4.5rem;
    max-width: 550px;
    color: var(--blackLight);
    ::after {
        content: '.';
        font-size: 1.1em;
        transition: .2s color ease-in-out;
        color: ${({ $color }) => $color || 'var(--cyanDark)'};
    }
    @media only screen and (max-width: 1030px) {
        position: initial;
        text-align: center;
        font-size: 3rem;
        width: 100%;
        transform: translateY(35px);
    }
`;

export const SubpagesMainContentImage = styled.img`
    display: none;
    width: 35vh;
    max-width: 100%;
    margin-bottom: 30px;
    @media only screen and (max-width: 1030px) {
        display: block;
    }
`;

export const SubpagesMainContentDescription = styled(ParagraphElementStyled)`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50px);
    margin-top: 250px;
    max-width: 30%;
    @media only screen and (max-width: 1030px) {
        position: initial;
        text-align: center;
        margin-top: 0;
        transform: translateY(30px);
        width: 100%;
        max-width: 600px;
    }
`;