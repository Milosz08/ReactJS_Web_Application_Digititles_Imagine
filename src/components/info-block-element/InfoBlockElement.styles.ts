/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: InfoBlockElement.styles.ts
 * Last modified: 05/04/2022, 21:56
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

export const InfoBlockElementContainer = styled.aside`
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: var(--whiteDark);
    border-radius: 8px;
    margin-bottom: 50px;
    padding: 30px;
    font-size: 1.2rem;
    color: var(--blackLight);
    ::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        background-color: var(--orangeDark);
        width: 5px;
        height: 100%;
    }
`;

export const InfoBlockElementHeader = styled.h3`
    font-size: 1.5rem;
    color: var(--blackLight);
    font-weight: 600;
    margin-bottom: 15px;
    ::after {
        content: '?';
        padding-left: 3px;
        font-size: 1.1em;
        color: var(--orangeDark);
    }
`;