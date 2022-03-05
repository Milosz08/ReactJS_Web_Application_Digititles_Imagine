/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: AllProjectsList.tsx
 * Last modified: 28/02/2022, 14:36
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

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import useProjectListAnimations from '../../hooks/single-project/useProjectListAnimations';

import {
    AllProjectsListContainer, SingleProjectContainer, SingleProjectLinkElement, SingleProjectLinkTextContainer
} from './AllProjectsList.styles';


interface PropsProvider {
    redirRef: React.MutableRefObject<any>;
}

const AllProjectsList: React.FC<PropsProvider> = ({ redirRef }): JSX.Element => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const [ refs, click, handleMouse, handleClick ] = useProjectListAnimations();

    const generateAllProjects: JSX.Element[] = projects.map((project, idx) => (
        <SingleProjectContainer
            key = {project.id}
            ref = {refs[idx]}
            onClick = {() => handleClick(project.id)}
            onMouseEnter = {e => handleMouse(e, project.id)}
            onMouseLeave = {e => handleMouse(e, project.id)}
        >
            <SingleProjectLinkElement
                to = {`/projects/project/${project.projectPath}`}
                delay = {2000}
                data-id = {project.id}
                $dotColor = {project.projectColours.strongForeground}
                $disableHover = {click.active && project.id === click.id}
                $disableRestHover = {click.active && project.id !== click.id}
            >
                <SingleProjectLinkTextContainer>
                    {project.title}
                </SingleProjectLinkTextContainer>
            </SingleProjectLinkElement>
        </SingleProjectContainer>
    ));

    return (
        <AllProjectsListContainer
            ref = {redirRef}
        >
            {generateAllProjects}
        </AllProjectsListContainer>
    );
};

export default AllProjectsList;