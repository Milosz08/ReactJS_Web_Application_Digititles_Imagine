/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NavigationBottomBar.styles.ts
 * Last modified: 23/02/2022, 19:38
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
import { button_rs } from '../../styles/reset.styles';

export const NavigationBottomBarContainer = styled.nav`
    position: fixed;
    display: flex;
    bottom: 0;
    left: 250px;
    width: 50%;
    height: 100px;
    z-index: 2;
    @media only screen and (max-width: 1330px) {
        left: 150px;
    }
    @media only screen and (max-width: 1030px) {
        justify-content: center;
        width: calc(100% - 60px);
        margin: 0 30px;
        left: 0;
    }
`;

export const NavigationBottomBarLine = styled.div`
    position: relative;
    width: 4px;
    height: 100%;
    background-color: var(--grayLighter);
    ::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--cyanDark);
        animation: scrollLine 2s infinite;
    }
`;

export const NavigateTextContentContainer = styled.div`
    font-size: var(--paragraphFontSize);
    font-weight: 500;
    margin-left: 20px;
    color: var(--grayDark);
    line-height: 1;
`;

export const NavigateListenerButton = styled(button_rs)`
    transition: .3s color ease-in-out;
    text-transform: capitalize;
    :hover {
        color: var(--cyanDark);
    }
`;