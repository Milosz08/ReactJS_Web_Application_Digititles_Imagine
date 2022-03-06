/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Header.styles.ts
 * Last modified: 21/02/2022, 23:13
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

import { button_rs, link_rs } from '../../styles/reset.styles';
import { HideElementOnLoad, NavigationSingleTextElement } from '../../styles/mixins.styles';

const addPaddingOnDisableScroll = (menuOpen: boolean, disabledPx: number, initPx: number) => (
    menuOpen || disabledPx ? disabledPx + initPx : initPx
);

export const HeaderContainer = styled.header<{ $ifMenuOpen: boolean, $ifGradient: boolean, $scrollDisabledPx: number }>`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 180px;
    padding-right: ${({ $ifMenuOpen, $scrollDisabledPx }) => 
            addPaddingOnDisableScroll($ifMenuOpen, $scrollDisabledPx, 50)}px;
    padding-left: 50px;
    z-index: 6;
    @media only screen and (max-width: 1030px) {
        height: 90px;
        padding-right: ${({ $ifMenuOpen, $scrollDisabledPx }) => 
                addPaddingOnDisableScroll($ifMenuOpen, $scrollDisabledPx, 30)}px;
        padding-left: 30px;
        background-color: ${({ $ifMenuOpen, $ifGradient }) => $ifMenuOpen 
                ? 'transparent' : $ifGradient ? 'var(--whiteClean)' : 'transparent'};
        box-shadow: ${({ $ifGradient, $ifMenuOpen }) => $ifMenuOpen 
                ? 'none' : $ifGradient ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none'};;
        transition: background-color .3s .2s, box-shadow .3s, transform .3s;
    }
    @media only screen and (max-width: 760px) {
        padding-right: ${({ $ifMenuOpen, $scrollDisabledPx }) =>
                addPaddingOnDisableScroll($ifMenuOpen, $scrollDisabledPx, 30)}px;
    }
`;

export const HeaderLogoLeftContentContainer = styled(link_rs)`
    display: flex;
    align-items: center;
`;

export const HeaderLogoImagesContainer = styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    @media only screen and (max-width: 1030px) {
        width: 80px;
        height: 80px;
    }
`;

export const HeaderLogoImage = styled.img<{ $ifActive: boolean }>`
    position: absolute;
    opacity: ${({ $ifActive }) => $ifActive ? 1 : 0};
    transition: .4s .2s opacity ease-in-out;
    width: 100%;
    height: 100%;
`;

export const HeaderLogoTitle = styled.div`
    font-family: 'O', sans-serif;
    margin-left: 30px;
    font-size: 3rem;
    letter-spacing: -2px;
    color: var(--cyanDark);
    ${HideElementOnLoad()};
    transform: translateX(-10px);
    span {
        color: var(--grayDark);
        letter-spacing: inherit;
    }
    @media only screen and (max-width: 1030px) {
        display: none !important;
    }
`;

export const HeaderNavRightContentContainer = styled.nav`
    display: flex;
    margin-right: 50px;
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--blackLight);
    text-transform: capitalize;
    transition: .3s;
    @media only screen and (max-width: 1030px) {
        margin-right: 0;
    }
`;

export const HeaderNavRightLinkContainer = styled.div`
    align-items: center;
    transform: translateY(10px);
    ${HideElementOnLoad()};
`;

export const HeaderNavRightLinkElement = styled(link_rs)`
    ${NavigationSingleTextElement({ })};
    @media only screen and (max-width: 1030px) {
        display: none !important;
    }
`;

export const HeaderNavRightMenuElement = styled(button_rs)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 120px;
    margin-left: 30px;
    color: ${({ theme }) => theme.$ifMenuOpen ? 'var(--whiteClean)' : 'inherit'};
    :hover, :hover span {
        color: var(--${({ theme }) => theme.$ifMenuOpen ? 'whiteClean' : 'cyanDark'});
        div, div::before, div::after {
            background-color: var(--${({ theme }) => theme.$ifMenuOpen ? 'whiteClean' : 'cyanDark'});
        }
        div {
            background-color: ${({ theme }) => theme.$ifHamActive ? 'transparent' : 'var(--cyanDark)'};
        }
        span:after {
            width: calc(100% - 20px);
        }
    }
`;

export const HeaderNavRightMenuLabel = styled.span`
    ${({ theme }) => NavigationSingleTextElement({
        $color: theme.$ifMenuOpen ? 'var(--whiteClean)' : 'var(--cyanDark)',
    })};
`;

export const HeaderNavRightHamburgerElement = styled.div`
    position: relative;
    margin-left: 10px;
    width: 23px;
    height: 2px;
    background-color: ${({ theme }) => theme.$ifHamActive ? 'transparent' : 'var(--blackLight)'};
    transition: .4s;
    ::before, ::after {
        position: absolute;
        content: '';
        left: 0;
        top: -8px;
        width: 100%;
        height: 100%;
        background-color: var(--${({ theme }) => theme.$ifMenuOpen ? 'whiteClean' : 'blackLight'});
        transform: ${({ theme }) => theme.$ifHamActive ? 'translateY(8px) rotate(225deg)' : 'none'};
        transition: .4s;
    }
    ::after {
        top: 8px;
        transform: ${({ theme }) => theme.$ifHamActive ? 'translateY(-8px) rotate(-225deg)' : 'none'};
    }
`;