/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectImageParallax.tsx
 * Last modified: 07/03/2022, 01:52
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
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import { ProjectContext, ProjectContextTypes } from '../../pages/SingleProjectPageReact';
import useBackgroundImageParallax from '../../hooks/single-project/useBackgroundImageParallax';

import { ProjectImageParallaxContainer, ProjectImageParallaxElement } from './ProjectImageParallax.styles';


const ProjectImageParallax: React.FC = (): JSX.Element => {

    const { projectsPhotos }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);

    const parallaxImage = projectsPhotos.find(project => project.projectId === findProject!.id)!
        .projectImages.find(image => image.name.toLocaleLowerCase().includes('paralax'));

    const parallaxRef = useBackgroundImageParallax();

    return (
        <ProjectImageParallaxContainer>
            <ProjectImageParallaxElement
                ref = {parallaxRef}
                $imageUrl = {parallaxImage!.url}
            />
        </ProjectImageParallaxContainer>
    );
};

export default ProjectImageParallax;