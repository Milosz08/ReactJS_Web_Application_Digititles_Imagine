/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsViewAllProjectsLinks.styles.ts
 * Last modified: 27/03/2022, 00:28
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
import { CmsGridTemplateArea } from '../../styles/mixins.styles';

export const CmsViewAllProjectsLinksContainer = styled.div`
    ${CmsGridTemplateArea()};
    margin-bottom: 50px;
`;

export const CmsSingleProjectLink = styled(link_rs)<{ $dotColor: string }>`
    position: relative;
    overflow: hidden;
    background-color: var(--whiteDark);
    color: var(--blackLight);
    font-size: 2rem;
    font-weight: 500;
    border-radius: 10px;
    padding: 30px;
    height: 180px;
    transition: .3s;
    line-height: 1;
    ::after {
        content: '.';
        color: ${({ $dotColor }) => $dotColor};
        font-size: 1.2em;
    }
    ::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7px;
        background-color: ${({ $dotColor }) => $dotColor};
    }
    :hover {
        transform: translateY(-10px);
    }
`;

export const CmsAddNewProjectLink = styled(link_rs)`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-weight: 300;
    color: var(--cyanDark);
    border: 4px dashed var(--cyanDark);
    transition: .3s;
    height: 180px;
`;