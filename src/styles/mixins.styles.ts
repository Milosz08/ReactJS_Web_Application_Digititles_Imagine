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
    transition: .3s border-bottom-color ease-in-out;
    border-bottom: 2px solid var(--${$ifError ? 'redLight' : 'blackDarken'});
    border-radius: 5px;
    ::placeholder {
        color: var(--grayDarker);
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