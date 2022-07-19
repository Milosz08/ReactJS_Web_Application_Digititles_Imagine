/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectUploadImagesSection.styles.ts
 * Last modified: 16/04/2022, 16:56
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

import { button_rs, input_rs } from '../../styles/reset.styles';
import { CmsContentBoxView, StandardButton } from '../../styles/mixins.styles';

export const CmsAddProjectUploadImagesSectionContainer = styled.section`
    ${CmsContentBoxView({ content: 'upload project images' })};
    margin-bottom: 40px;
`;

export const CmsAddProjectUploadImageSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
`;

export const CmsAddProjectUploadImageSingleContainerWrapper = styled.div`
    margin: 20px 0;
`;

export const CmsAddProjectUploadImageSingleContainerDescription = styled.p`
    color: var(--grayDarker);
    margin-top: 15px;
`;

export const CmsAddProjectUploadImageSectionOpenModalButton = styled(button_rs)`
    ${StandardButton()};
    font-size: 1.2rem;
    margin-top: 20px;
`;

export const CmsAddProjectModalContainer = styled.div`
    width: 100%;
`;

export const CmsAddProjectModalButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CmsAddProjectUploadImageFrameButton = styled(button_rs)<{ $ifDisabled: boolean }>`
    position: relative;
    opacity: ${({ $ifDisabled }) => $ifDisabled ? .5 : 1};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 2px dashed var(--cyanDark);
    min-height: 120px;
    color: var(--cyanDark);
    font-size: 1.2rem;
    width: 100%;
    font-weight: 500;
`;

export const CmsAddProjectUploadImageFrameDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--grayDarker);
`;

export const CmsAddProjectUploadImageInput = styled(input_rs)`
    opacity: 0;
    position: absolute;
    z-index: 5;
    width: calc(100% - 60px);
    height: 120px;
    cursor: pointer;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const CmsAddProjectUploadImageDescription = styled.p<{ $ifError: boolean }>`
    color: var(--${({ $ifError }) => $ifError ? 'red' : 'green'}Dark);
    font-size: 1.1rem;
    margin-top: 20px;
    text-align: center;
    width: 100%;
`;

export const CmsAddProjectUploadImageFileImagesContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const CmsAddProjectUploadImageFileContainer = styled.div`
    position: relative;
`;

export const CmsAddProjectUploadImageFileSource = styled.img`
    width: 130px;
    margin-right: 20px;
    height: auto;
`;

export const CmsAddProjectUploadImageFileSourceDeleteImageButton = styled(button_rs)`
    position: absolute;
    bottom: -3px;
    right: 12px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background-color: var(--grayLight);
    color: var(--redDark);
    border-radius: 50%;
    transition: .2s;
    &:hover {
        background-color: var(--redDark);
        color: var(--grayLight);
    }
`;