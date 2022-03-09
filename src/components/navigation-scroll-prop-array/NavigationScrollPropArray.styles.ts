/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NavigationScrollPropArray.styles.ts
 * Last modified: 07/03/2022, 01:42
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
import { NavigationScrollTopContainer } from '../navigation-scroll-top/NavigationScrollTop.styles';
import { button_rs } from '../../styles/reset.styles';

export const NavigationScrollPropArrayContainer = styled(NavigationScrollTopContainer)<{ $ifFixed: boolean }>`
    bottom: 540px;
    :hover {
        cursor: default;
        color: var(--grayDark);
    }
`;

export const NavigationScrollAllNavigationElements = styled.div`
    display: flex;
    height: 100%;
`;

export const NavigationScrollAllNavigationSingleElement = styled(button_rs)<{ $ifActive: boolean }>`
    color: var(--${({ $ifActive }) => $ifActive ? 'cyanDark' : 'grayDark'});
    margin: 0 15px;
    text-transform: capitalize;
    transition: .2s color ease-in-out;
    :hover {
        color: var(--cyanDark);
    }
`;