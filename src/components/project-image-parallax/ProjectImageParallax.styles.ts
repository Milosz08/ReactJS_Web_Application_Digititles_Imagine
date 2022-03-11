/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectImageParallax.styles.ts
 * Last modified: 07/03/2022, 01:53
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

export const ProjectImageParallaxContainer = styled.aside`
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background-image: linear-gradient(rgba(15, 15, 15, 0.6),transparent,transparent,rgba(15, 15, 15, 0.6));
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;

export const ProjectImageParallaxElement = styled.div<{ $imageUrl: string }>`
    background-image: url('${({ $imageUrl }) => $imageUrl}');
    background-position: top;
    height: 150vh;
`;