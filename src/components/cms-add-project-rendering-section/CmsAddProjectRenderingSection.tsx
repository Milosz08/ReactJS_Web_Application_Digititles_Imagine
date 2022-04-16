/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectRenderingSection.tsx
 * Last modified: 08/04/2022, 00:14
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

import { ProjectFieldsKeys } from '../../redux/redux-subreducers/redux-project-form/types';
import { CmsAddProjectRenderingSectionContainer } from './CmsAddProjectRenderingSection.styles';

import CmsAddProjectTextInputElement from '../cms-add-project-text-input-element/CmsAddProjectTextInputElement';
import CmsAddProjectShortResList from './subcomponents/CmsAddProjectShortResList';
import CmsAddProjectRenderingIfImax from './subcomponents/CmsAddProjectRenderingIfImax';


const CmsAddProjectRenderingSection: React.FC = (): JSX.Element => (
    <CmsAddProjectRenderingSectionContainer>
        <CmsAddProjectTextInputElement
            innerInputPlaceholder = 'ex. "5.5 (in hours)"'
            inputKey = {ProjectFieldsKeys.RENDERING_TIME}
            topInputPlaceholder = "Rendering time (in hours)"
        />
        <CmsAddProjectTextInputElement
            innerInputPlaceholder = 'ex. "H.264"'
            inputKey = {ProjectFieldsKeys.SAMPLING_CODEC}
            topInputPlaceholder = "Sampling codec"
        />
        <CmsAddProjectTextInputElement
            innerInputPlaceholder = 'ex. "4096x2160"'
            inputKey = {ProjectFieldsKeys.NATIVE_RESOLUTION}
            topInputPlaceholder = "Native resolution"
        />
        <CmsAddProjectShortResList/>
        <CmsAddProjectRenderingIfImax/>
    </CmsAddProjectRenderingSectionContainer>
);

export default CmsAddProjectRenderingSection;