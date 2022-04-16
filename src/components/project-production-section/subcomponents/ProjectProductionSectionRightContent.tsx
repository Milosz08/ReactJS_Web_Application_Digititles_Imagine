/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectProductionSectionRightContent.tsx
 * Last modified: 08/03/2022, 23:37
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

import useMonitorImageParallax from '../../../hooks/single-project/useMonitorImageParallax';
import { ProjectContext, ProjectContextTypes } from '../../../pages/SingleProjectPageReact';

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import {
    ProjectProductionMonitorRightContentContainer, ProjectProductionMonitorRightContentImage
} from '../ProjectProductionSection.styles';


const ProjectProductionSectionRightContent: React.FC = (): JSX.Element => {

    const { projectsPhotos }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);

    const monitorRef = useMonitorImageParallax();

    const findPhotos = projectsPhotos
        .find(project => project.projectId === findProject!.id)!
        .projectImages.filter(image => image.name.toLocaleLowerCase().includes('img'));

    const generateImages: JSX.Element[] = findPhotos.map(image => (
        <ProjectProductionMonitorRightContentImage
            key = {image.name}
            src = {image.url}
            alt = {`Unable to load image: ${image.name}`}
        />
    ));

    return (
        <ProjectProductionMonitorRightContentContainer
            ref = {monitorRef}
        >
            {generateImages}
        </ProjectProductionMonitorRightContentContainer>
    );
};

export default ProjectProductionSectionRightContent;