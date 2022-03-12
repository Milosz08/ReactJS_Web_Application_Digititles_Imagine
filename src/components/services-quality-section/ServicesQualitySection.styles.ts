/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesQualitySection.styles.ts
 * Last modified: 07/03/2022, 02:23
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

import { GridTemplate } from '../../styles/mixins.styles';
import { ServicesParagraphElement, ServicesSectionContainer } from '../services-software-section/ServicesSoftwareSection.styles';

export const ServicesQualitySectionContainer = styled(ServicesSectionContainer)`
    background-color: var(--whiteClean);
    @media only screen and (max-width: 1600px) {
        flex-direction: column;
    }
`;

export const ServicesQualityLeftContentContainer = styled.div`
    margin-left: 150px;
    width: 40vw;
    @media only screen and (max-width: 1600px) {
        width: calc(100% - 400px);
        margin: 0 200px 80px;
    }
    @media only screen and (max-width: 1030px) {
        width: calc(100% - 60px);
        margin: 0 30px 40px;
    }
`;

export const ServicesQualityRightContentContainer = styled.div`
    margin: auto 100px;
    flex-grow: 1;
    ${GridTemplate()};
    @media only screen and (max-width: 1600px) {
        margin: auto 200px;
    }
    @media only screen and (max-width: 1030px) {
        width: calc(100% - 60px);
        margin: 0 30px;
    }
`;

export const ServicesQualityParagraphElement = styled(ServicesParagraphElement)`
    color: var(--blackLight);
`;

export const ServicesQualityUnorderedList = styled.ul`
    width: 100%;
`;

export const ServicesQualityUnorderedListElement = styled.li`
    font-size: var(--paragraphFontSize);
    color: var(--blackLight);
    padding: 10px 0;
    margin-left: 20px;
    line-height: 1.1;
    strong {
        color: var(--cyanDark);
    }
`;