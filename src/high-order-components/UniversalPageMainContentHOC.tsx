/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: UniversalPageMainContentHOC.tsx
 * Last modified: 28/02/2022, 17:15
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
import styled from 'styled-components';

import BackgroundFluidImage from '../components/background-fluid-image/BackgroundFluidImage';
import { SubpagesMainContentTypes } from '../static/subpagesMainContent';


interface PropsProvider {
    LeftComponent: React.FC<{ content?: SubpagesMainContentTypes, visibleOnLoad?: boolean }>;
    content?: SubpagesMainContentTypes;
    images?: string[];
    imageSource?: string;
    ifSingleProject?: boolean;
    showBackgroundOnLoad?: boolean;
    visibleOnLoad?: boolean;
}

const UniversalPageMainContentHOC: React.FC<PropsProvider> = ({
    LeftComponent, showBackgroundOnLoad, content, images, imageSource, ifSingleProject, visibleOnLoad, ...rest
}): JSX.Element => (
    <SubpagesMainContentContainer>
        <BackgroundFluidImage
            images = {content ? content.images : images!}
            showBackgroundOnLoad = {showBackgroundOnLoad}
            imageSource = {imageSource}
            ifSingleProject = {ifSingleProject}
        />
        <LeftComponent
            content = {content}
            visibleOnLoad = {visibleOnLoad}
            {...rest}
        />
    </SubpagesMainContentContainer>
);

const SubpagesMainContentContainer = styled.main`
    width: 100%;
    height: 100vh;
`;

export default UniversalPageMainContentHOC;