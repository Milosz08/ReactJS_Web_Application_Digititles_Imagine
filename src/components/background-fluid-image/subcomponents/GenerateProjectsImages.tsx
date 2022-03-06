/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GenerateProjectsImages.tsx
 * Last modified: 05/03/2022, 00:30
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
import { useSelector } from 'react-redux';

import useOnHoverSelectImages from '../../../hooks/background-images/useOnHoverSelectImages';
import useShowHideBackgroundImage from '../../../hooks/background-images/useShowHideBackgroundImage';

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import { BackgroundFluidBasicImageContainer, ProjectsFluidImageStyles } from '../BackgroundFluidImage.styles';


const GenerateProjectsImages: React.FC = (): JSX.Element => {

    const { projectsPhotos }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const [ imageRef ] = useShowHideBackgroundImage({ invokePx: 200, ifShowOnLoad: false, elements: 1 });
    const imageRefs = useOnHoverSelectImages({
        countOfImages: projectsPhotos.length, ifAutoAlpha: true, invoke: { hidePx: 100, showPx: 0 }
    });

    const generateProjectsImages: JSX.Element[] = projectsPhotos.map((project, idx) => {
        const mainImage = project.projectImages.find(image => image.name.toLocaleLowerCase().includes('main'))!;
        return (
            <ProjectsFluidImageStyles
                key = {project.projectId}
                ref = {imageRefs[idx]}
                src = {mainImage.url}
                alt = {`Unable to load image from server: ${mainImage.name}`}
            />
        );
    });

    return (
        <BackgroundFluidBasicImageContainer
            ref = {imageRef}
        >
            {generateProjectsImages}
        </BackgroundFluidBasicImageContainer>
    );
};

export default GenerateProjectsImages;