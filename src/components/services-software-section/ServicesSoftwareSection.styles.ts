/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesSoftwareSection.styles.ts
 * Last modified: 07/03/2022, 02:21
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
import ReactMarkdown from 'react-markdown';
import { GridTemplate } from '../../styles/mixins.styles';

export const ServicesSectionContainer = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: var(--cyanDarker);
    padding: 80px 0;
    @media only screen and (max-width: 1600px) {
        flex-direction: column-reverse;
    }
`;

export const ServicesSoftwareLeftContentContainer = styled.div`
    margin: auto 100px auto 150px;
    flex-grow: 1;
    height: fit-content;
    ${GridTemplate()};
    @media only screen and (max-width: 1600px) {
        margin: auto 200px;
    }
    @media only screen and (max-width: 1030px) {
        width: calc(100% - 60px);
        margin: 0 30px;
    }
`;

export const ServicesSoftwareRightContentContainer = styled.div`
    margin-right: 100px;
    width: 35vw;
    @media only screen and (max-width: 1600px) {
        width: calc(100% - 400px);
        margin: 0 200px 80px;
    }
    @media only screen and (max-width: 1030px) {
        width: calc(100% - 60px);
        margin: 0 30px 40px;
    }
`;

export const ServicesRightHeaderAndParagraphContainer = styled.div`
    width: 100%;
`;

export const ServicesParagraphElement = styled(ReactMarkdown)`
    font-size: var(--paragraphFontSize);
    color: var(--whiteClean);
    margin: 1.4rem 0;
    line-height: normal;
    width: 100%;
    max-width: 650px;
    strong {
        color: var(--cyanLight);
        font-weight: inherit;
    }
    @media only screen and (max-width: 1600px) {
        max-width: 100%;
    }
`;