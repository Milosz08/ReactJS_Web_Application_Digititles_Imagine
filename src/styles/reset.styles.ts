/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: reset.styles.ts
 * Last modified: 21/02/2022, 18:56
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
import { Link } from 'react-router-dom';

import DelayRouteLinkHOC from '../high-order-components/DelayRouteLinkHOC';
import ScrollToTopFooterLinkHOC from '../high-order-components/ScrollToTopFooterLinkHOC';

export const link_rs = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const a_rs = styled.a`
    text-decoration: none;
    color: inherit;
`;

export const delay_link_rs = styled(DelayRouteLinkHOC)`
    text-decoration: none;
    color: inherit;
`;

export const footer_scroll_link_rs = styled(ScrollToTopFooterLinkHOC)`
    text-decoration: none;
    color: inherit;
`;

export const button_rs = styled.button`
    color: inherit;
    background-color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    border: none;
    cursor: pointer;
    :disabled {
        cursor: not-allowed;
    }
`;

export const input_rs = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
`;

export const textarea_rs = styled.textarea`
    border: none;
    outline: none;
    resize: none;
`;

export const ul_rs = styled.ul`
    list-style-type: none;
`;

export const select_rs = styled.select`
    border: none;
    outline: none;
    resize: none;
    appearance: none;
    cursor: pointer;
`;