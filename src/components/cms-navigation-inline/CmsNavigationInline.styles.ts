/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsNavigationInline.styles.ts
 * Last modified: 22/03/2022, 12:28
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
import { link_rs } from '../../styles/reset.styles';
import { BsArrowRightShort } from 'react-icons/bs';

export const CmsNavigationInlineContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0 30px;
    color: var(--grayDark);
    @media only screen and (max-width: 663px) {
        justify-content: center;
    }
`;

export const CmsNavigationInlineSingleBlock = styled.li<{ $ifNotMargin?: boolean }>`
    margin-left: ${({ $ifNotMargin }) => $ifNotMargin ? 0 : '8px'};
    display: flex;
    align-items: center;
    @media only screen and (max-width: 663px) {
        margin: 5px 0 5px ${({ $ifNotMargin }) => $ifNotMargin ? 0 : '8px'};
    }
`;

export const CmsNavigationInlineLink = styled(link_rs)<{ $ifActive?: boolean }>`
    font-size: 1.1rem;
    text-transform: capitalize;
    color: ${({ $ifActive }) => $ifActive ? 'var(--cyanDark)' : 'inherit'};
    :hover {
        text-decoration: underline;
    }
    ::after {
        content: '.';
    }
`;

export const CmsNavigationInlineArrowIcon = styled(BsArrowRightShort)`
    font-size: 1.5rem;
    margin-right: 8px;
`;