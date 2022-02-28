/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: UniversalComponents.styles.ts
 * Last modified: 26/02/2022, 22:06
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

export const HeaderElementStyled = styled.h3<{ $ifNotIncludeDot?: boolean, $dotColor?: string }>`
    font-size: var(--headerFontSize);
    color: var(--blackLight);
    width: fit-content;
    margin-bottom: 40px;
    ::after {
        content: '${({ $ifNotIncludeDot }) => $ifNotIncludeDot ? '' : '.'}';
        color: var(--${({ $dotColor }) => $dotColor || 'cyanDark'});
    }
`;

export const ParagraphElementStyled = styled.p`
    font-size: var(--paragraphFontSize);
    color: var(--grayDarker);
`;