/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectColorsAndSoftwareSection.styles.ts
 * Last modified: 10/04/2022, 01:40
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
import { Webpage } from '../../helper-primitives/Webpage';

import { input_rs } from '../../styles/reset.styles';
import { CmsContentBoxView } from '../../styles/mixins.styles';

export const CmsAddProjectColorsAndSoftwareSectionContainer = styled.section`
    display: flex;
    margin-bottom: 50px;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;

export const CmsAddProjectColorsSectionContainer = styled.div`
    ${CmsContentBoxView({ content: 'project colours' })};
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20px 0 0;
    @media only screen and (max-width: 1030px) {
        margin: 0;
    }
`;

export const CmsAddProjectColorsInputLabel = styled.label`
    display: block;
    position: relative;
    width: 100%;
    height: 70px;
`;

export const CmsAddProjectColorsInputElement = styled(input_rs)`
    appearance: none;
    opacity: 0;
    width: 100%;
    height: 50px;
`;

export const CmsAddProjectColorsInputStyledElement = styled.div.attrs(({ theme }) => ({
    style: {
        backgroundColor: theme.$selectedColor,
    }
}))`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    top: 0;
    width: 100%;
    height: 50px;
    border-radius: 10px;
`;

export const CmsAddProjectColorsInputHexTextContent = styled.div.attrs(({ theme }) => ({
    style: {
        color: Webpage.changeColorLumination(theme.$selectedColor),
    }
}))`
    font-size: 1.3rem;
`;

export const CmsAddProjectSoftwareSectionContainer = styled(CmsAddProjectColorsSectionContainer)`
    margin: 0 0 0 20px;
    flex-basis: 60%;
    ::after {
        content: 'software used in this project';
    }
    @media only screen and (max-width: 1030px) {
        margin: 50px 0 0;
    }
`;