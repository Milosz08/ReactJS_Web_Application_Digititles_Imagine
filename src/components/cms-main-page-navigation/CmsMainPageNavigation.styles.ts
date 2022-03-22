/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsMainPageNavigation.styles.ts
 * Last modified: 22/03/2022, 18:00
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
import { BsArrowRight } from 'react-icons/bs';

import { link_rs } from '../../styles/reset.styles';

export const CmsMainPageNavigationContainer = styled.div`
    width: 100%;
    margin: 60px 0;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "." "." "." ".";
    align-items: center;
    a:hover {
        transform: translateY(-10px);
    }
    @media only screen and (max-width: 1118px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: ".." "..";
    }
    @media only screen and (max-width: 663px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "....";
    }
`;

export const CmsMainPageNavigationLink = styled(link_rs)`
    position: relative;
    overflow: hidden;
    background-color: var(--whiteDark);
    color: var(--blackLight);
    border-radius: 10px;
    padding: 30px;
    height: 180px;
    transition: .3s;
`;

export const CmsMainPageNavigationHeader = styled.h4`
    font-size: 2rem;
    position: relative;
    z-index: 1;
    text-transform: capitalize;
    font-weight: 500;
    ::after {
        content: '.';
        color: var(--cyanLight);
    }
`;

export const CmsMainPageNavigationIconWrapper = styled.div`
    position: absolute;
    z-index: 0;
    font-size: 10rem;
    bottom: -40px;
    color: var(--grayLighter);
`;

export const CmsMainPageArrowIcon = styled(BsArrowRight)`
    position: absolute;
    z-index: 1;
    color: var(--cyanDark);
    bottom: 20px;
    right: 40px;
    font-size: 2.5rem;
`;