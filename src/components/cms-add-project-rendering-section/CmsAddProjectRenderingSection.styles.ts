/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectRenderingSection.styles.ts
 * Last modified: 08/04/2022, 00:15
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
import { FiArrowDown } from 'react-icons/fi';

import { select_rs } from '../../styles/reset.styles';
import { CmsContentBoxView, InputWithTextarea } from '../../styles/mixins.styles';

export const CmsAddProjectRenderingSectionContainer = styled.section`
    ${CmsContentBoxView({ content: 'project rendering info' })};
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "..." "...";
    @media only screen and (max-width: 1030px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas: ".." ".." "..";
    }
    @media only screen and (max-width: 830px) {
        gap: 30px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "." "." "." ".";
    }
`;

export const CmsAddProjectRenderingIfImaxSelectBoxLabel = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const CmsAddProjectRenderingIfImaxSelectBox = styled(select_rs)<{ $ifError: boolean }>`
    ${({ $ifError }) => InputWithTextarea({ $ifError })};
    padding: 11px 13px 9px;
    font-size: 1.2rem;
    border-bottom-width: 3px !important;
`;

export const CmsAddProjectRenderingIfImaxArrow = styled(FiArrowDown)`
    position: absolute;
    right: 20px;
    bottom: 13px;
    font-size: 1.5rem;
    color: var(--cyanDark);
`;