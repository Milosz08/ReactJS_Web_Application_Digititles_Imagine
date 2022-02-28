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
import { HeaderElementStyled, ParagraphElementStyled } from '../universal-components/UniversalComponents.styles';

export const SubpagesMainContentUniversalContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 200px;
    max-width: 40vw;
    @media only screen and (max-width: 1330px) {
        padding-left: 150px;
        max-width: 50%;
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
    max-width: 50%;
`;

export const SubpagesMainContentImageAndTitleContainer = styled.div`
    opacity: 0;
    visibility: hidden;
    transform: translateY(30px);
    @media only screen and (max-width: 1030px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const SubpagesMainContentTitle = styled(HeaderElementStyled)`
    font-size: var(--biggerHeaderFontSize);
    @media only screen and (max-width: 1030px) {
        font-size: var(--headerFontSize);
        text-align: center;
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
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50px);
    margin-top: 50px;
    @media only screen and (max-width: 1030px) {
        text-align: center;
        margin-top: 0;
        transform: translateY(30px);
    }
`;