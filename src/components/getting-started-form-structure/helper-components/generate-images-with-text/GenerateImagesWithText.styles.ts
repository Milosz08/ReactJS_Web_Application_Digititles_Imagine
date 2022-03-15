/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GenerateImagesWithText.styles.ts
 * Last modified: 14/03/2022, 16:31
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
import { input_rs } from '../../../../styles/reset.styles';
import { HideAllAnimation } from '../../GettingStartedFormStructure.styles';

export const ImagesWithTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 100px);
    margin: 0 50px;
    @media only screen and (max-width: 776px) {
        width: 100%;
        margin: 0;
    }
`;

export const ImagesWithTextAllImagesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media only screen and (max-width: 1200px) {
        flex-wrap: wrap;
    }
`;

export const ImagesWithTextImagesContainer = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0 20px;
    max-width: 260px;
    cursor: pointer;
    ${HideAllAnimation(true)};
    :hover {
        img, p {
            opacity: 1;
        }
        img {
            transform: scale(1.1);
        }
    }
    @media only screen and (max-width: 1030px) {
        ${HideAllAnimation(false)};
    }
    @media only screen and (max-width: 1200px) {
        margin-bottom: 50px;
    }
`;

export const ImagesWithTextImageRadioButton = styled(input_rs)`
    position: absolute;
    appearance: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    :checked {
        ~ p, ~ img {
            opacity: 1;
        }
        ~ p::before {
            width: 60%;
        }
    }
`;

export const ImagesWithTextImage = styled.img`
    width: 100%;
    height: 100%;
    opacity: .4;
    transition: .4s cubic-bezier(.5, -0.43, .46, 1.41);
`;

export const ImagesWithTextDescription = styled.p`
    position: relative;
    margin-top: 30px;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--blackLight);
    text-transform: capitalize;
    opacity: .4;
    transition: .4s;
    text-align: center;
    ::after {
        content: '.';
        color: var(--cyanLight);
    }
    ::before {
        position: absolute;
        content: '';
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 4px;
        background-color: var(--cyanLight);
        transition: .4s cubic-bezier(.5, -0.43, .46, 1.41);
    }
    @media only screen and (max-width: 1337px) {
        font-size: 2rem;
    }
`;