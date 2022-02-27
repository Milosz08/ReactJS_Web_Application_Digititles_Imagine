/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainPageServices.styles.ts
 * Last modified: 26/02/2022, 21:39
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

import { BasicButtonWithBottomLine } from '../../styles/mixins.styles';
import { button_rs, footer_scroll_link_rs } from '../../styles/reset.styles';

export const MainPageServicesContainer = styled.section`
    width: calc(50% - 200px - 8vw);
    margin: 0 8vw 0 200px;
    padding: 150px 0;
    @media only screen and (max-width: 1320px) {
        width: calc(50% - 150px - 4vw);
        margin: 0 4vw 0 150px;
        padding: 150px 0 50px;
    }
    @media only screen and (max-width: 1030px) {
        width: calc(100% - 60px);
        margin: 0 30px;
    }
`;

export const MultipleShowHideBoxesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    list-style-type: none;
    @media only screen and (max-width: 1030px) {
        margin-top: 50px;
    }
`;

export const MultipleShowHideSingleBoxWrapper = styled.li<{ $ifActive: boolean }>`
    width: 100%;
    max-height: ${({ $ifActive }) => $ifActive ? '500px' : '80px'};
    overflow: hidden;
    transition: .4s all;
    border-bottom: 1px solid var(--grayLight);
    @media only screen and (max-width: 500px) {
        max-height: ${({ $ifActive }) => $ifActive ? '500px' : '92px'};
    }
`;

export const SingleBoxWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const SingleShowHideBoxButton = styled(button_rs)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    height: 80px;
    width: 100%;
    @media only screen and (max-width: 500px) {
        padding: 23px 0;
        height: 92px;
    }
`;

export const MultipleHidingContentSingleBoxWrapper = styled.div`
    margin: 20px 0 30px;
    text-align: left;
`;

export const SingleShowHideBoxHeader = styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--blackLight);
    text-transform: capitalize;
    text-align: left;
    @media only screen and (max-width: 1137px) {
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 1030px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 1.6rem;
    }
`;

export const SingleShowHideBoxCrossIndicator = styled.div<{ $ifActive: boolean }>`
    position: relative;
    width: 22px;
    height: 2px;
    background-color: var(--blackLight);
    transform: rotate(${({ $ifActive }) => $ifActive ? '180deg' : 0});
    transition: .4s transform ease-in-out;
    ::after {
        position: absolute;
        opacity: ${({ $ifActive }) => $ifActive ? 0 : 1};
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: center;
        transform: rotate(90deg);
        background-color: inherit;
        transition: .4s opacity ease-in-out;
    }
`;

export const SingleShowHideBoxServicesLink = styled(footer_scroll_link_rs)`
    ${BasicButtonWithBottomLine({ $isLeft: true, $color: 'cyanDark' })};
    display: block;
    margin: 30px 0 10px;
    font-size: 1.4rem;
    font-weight: 500;
    ::after {
        bottom: 10px;
        height: 3px;
    }
`;