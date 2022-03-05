/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: AllProjectsList.styles.ts
 * Last modified: 28/02/2022, 14:37
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
import { delay_link_rs } from '../../styles/reset.styles';

export const AllProjectsListContainer = styled.ul`
    list-style-type: none;
    width: 100%;
    padding: 50px 0;
    position: relative;
    z-index: 3;
`;

export const SingleProjectContainer = styled.li`
    width: 100%;
    transform: translateX(-100px);
    transition: .3s all ease-in-out;
    opacity: 0;
    visibility: hidden;
`;

export const SingleProjectLinkElement = styled(delay_link_rs)<{
    $dotColor?: string, $disableHover: boolean, $disableRestHover: boolean
}>`
    width: 100%;
    display: block;
    padding: 50px 0 50px 200px;
    color: var(--${({ $disableHover }) => $disableHover ? 'blackLight' : 'grayDark'});
    h3::after {
        color: ${({ $disableHover, $dotColor }) => $disableHover ? $dotColor || 'var(--cyanLight)' : 'inherit'};
    }
    :hover {
        color: var(--${({ $disableRestHover }) => $disableRestHover ? 'grayDark' : 'blackLight'});
        h3::after {
            color: ${({ $disableRestHover, $dotColor }) => 
                    $disableRestHover ? 'var(--grayDark)' : $dotColor || 'var(--cyanLight)'};
        }
    }
    @media only screen and (max-width: 1400px) {
        padding: 50px 0 50px 150px;
    }
    @media only screen and (max-width: 1030px) {
        
    }
`;

export const SingleProjectLinkTextContainer = styled.h3`
    font-size: 4vw;
    font-weight: 600;
    width: calc(50% - 200px);
    word-break: break-word;
    line-height: 1;
    transition: .2s color ease-in-out;
    ::after {
        content: '.';
        font-size: 1.1em;
        transition: .2s color ease-in-out;
    }
    @media only screen and (max-width: 1400px) {
        width: calc(50% - 150px);
        word-break: initial;
    }
    @media only screen and (max-width: 1030px) {

    }
`;