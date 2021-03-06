/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectUploadImagesSection.tsx
 * Last modified: 16/04/2022, 16:55
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

import * as React from 'react';

import { ImageUploadContainers } from '../../static/imageUploadContainers';
import CmsAddProjectUploadImageSingleContainer from './subcomponents/CmsAddProjectUploadImageSingleContainer';

import {
    CmsAddProjectUploadImageSectionWrapper, CmsAddProjectUploadImagesSectionContainer
} from './CmsAddProjectUploadImagesSection.styles';


const CmsAddProjectUploadImagesSection: React.FC = (): JSX.Element => {

    const generateAllSingleImageContainers: JSX.Element[] = ImageUploadContainers.map(container => (
        <CmsAddProjectUploadImageSingleContainer
            key = {container.description}
            imageContainerInfo = {container}
        />
    ));

    return (
        <CmsAddProjectUploadImagesSectionContainer>
            <CmsAddProjectUploadImageSectionWrapper>
                {generateAllSingleImageContainers}
            </CmsAddProjectUploadImageSectionWrapper>
        </CmsAddProjectUploadImagesSectionContainer>
    );
};

export default CmsAddProjectUploadImagesSection;