/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ScrollAndSuspenseBars.styles.ts
 * Last modified: 06/03/2022, 01:24
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

export const RightScrollBarContainer = styled.div<{ $barWidth: number }>`
    position: fixed;
    z-index: 4;
    display: ${({ $barWidth }) => Boolean($barWidth) ? 'block' : 'none'};
    right: 0;
    top: 0;
    height: 100vh;
    width: ${({ $barWidth }) => $barWidth}px;
    background-color: var(--scrollBarColor);
`;

export const SuspenseBarContainer = styled.div<{ $barActive: boolean }>`
    position: fixed;
    z-index: 4;
    display: ${({ $barActive }) => $barActive ? 'block' : 'none'};
    top: 0;
    left: 0;
    width: 6px;
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