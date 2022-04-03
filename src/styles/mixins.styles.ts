/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: mixins.styles.ts
 * Last modified: 22/02/2022, 17:09
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

export const HideElementOnLoad = () => css`
    opacity: 0;
    visibility: hidden;
    display: none;
`;

export const NavigationSingleTextElement = ({ $color }: { $color?: string }) => css`
    position: relative;
    padding: 5px 10px;
    :after {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 10px;
        width: 0;
        height: 3px;
        background-color: ${$color || 'var(--cyanDark)'};
        transition: .3s;
    }
    :hover {
        color: var(--cyanDark);
        :after {
            width: calc(100% - 20px);
        }
    }
`;

export const BasicButtonWithBottomLine = ({ $isLeft, $color }: { $isLeft: boolean, $color?: string }) => css`
    position: relative;
    color: var(--${$color || 'cyanLight'});
    font-weight: 400;
    font-size: 1.1rem;
    padding-bottom: 20px;
    margin-top: 20px;
    width: fit-content;
    text-transform: capitalize;
    ::after {
        position: absolute;
        content: '';
        width: 50%;
        height: 2px;
        left: ${$isLeft ? 0 : 'auto'};
        right: ${$isLeft ? 'auto' : 0};
        bottom: 5px;
        background-color: var(--${$color || 'cyanLight'});
        transition: .3s width ease-in-out;
    }
    :hover::after {
        width: 70%;
    }
`;

export const BasicTextInputElement = ({ $ifDark, $ifError }: { $ifDark: boolean, $ifError: boolean }) => css`
    color: var(--${$ifError ? 'redLight' : $ifDark ? 'grayDarker' : 'blackLight'});
    background-color: var(--${$ifDark ? 'blackDarken' : 'grayDark'});
    font-size: 1rem;
    padding: 10px 10px 8px;
    margin: 10px 0;
    width: 100%;
    transition: .3s all ease-in-out;
    border-bottom: 2px solid var(--${$ifError ? 'redLight' : 'blackDarken'});
    border-radius: 5px;
    ::placeholder {
        color: var(--${$ifError ? 'redLight' : $ifDark ? 'grayDarker' : 'blackLight'});
    }
    :focus {
        border-bottom-color: var(--${$ifError ? 'redLight' : $ifDark ? 'cyanLight' : 'cyanDark'});
    }
`;

export const RelativeContentContainer = styled.div`
    position: relative;
`;

export const GridTemplate = () => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 30px;
    grid-template-areas: ". ." ". ." ". .";
    align-items: center;
    @media only screen and (max-width: 740px) {
        grid-template-columns: 1fr;
        grid-template-areas: "." "." "." "." "." ".";
    }
`;

export const StandardButton = () => css`
    font-size: 1.4rem;
    background-color: var(--cyanDark);
    color: var(--whiteClean);
    border-radius: 10px;
    padding: 8px 20px 10px;
    cursor: pointer;
    transition: .2s;
    :hover {
        background-color: var(--cyanDarker);
    }
`;

export const InputWithTextarea = ({ $ifError }: { $ifError: boolean }) => css`
    width: 100%;
    font-size: 1.3rem;
    text-align: center;
    background-color: var(--whiteDark);
    color: var(--${$ifError ? 'redDark' : 'blackLight'});
    padding: 15px;
    border-bottom: 4px solid ${$ifError ? 'var(--redDark)' : 'transparent'};
    border-radius: 8px;
    box-sizing: border-box;
    transition: .2s border-bottom-color ease-in-out;
    ::placeholder {
        color: var(--${$ifError ? 'redDark' : 'grayDarker'});
    }
    :focus {
        border-bottom: 4px solid var(--${$ifError ? 'redDark' : 'cyanDark'});
    }
    @media only screen and (max-width: 776px) {
        font-size: 1.1rem;
    }
`;

export const CmsSafetyAreaContainer = styled.section`
    padding-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CmsSafetyAreaWrapper = styled.div`
    max-width: 1300px;
    width: calc(100% - 60px);
    margin: 0 30px;
`;

export const CmsGridTemplateArea = () => css`
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "." "." "." ".";
    align-items: center;
    @media only screen and (max-width: 1118px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: ".." "..";
    }
    @media only screen and (max-width: 663px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "....";
    }
`;