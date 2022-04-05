/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CenterContent.tsx
 * Last modified: 25/02/2022, 01:04
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

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import {
    MainMenuCenterSingleSectionContainer, MainMenuHeaderElement, MainMenuProjectSingleElement, MainMenuProjectsList,
    MainMenuSingleProjectInListContainer
} from '../MainMenu.styles';


const CenterContent: React.MemoExoticComponent<() => JSX.Element> = React.memo((): JSX.Element => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const generateFirstProjects: JSX.Element[] = projects.slice(0, 12).map(project => (
        <MainMenuSingleProjectInListContainer
            key = {project.id}
        >
            <MainMenuProjectSingleElement
                delay = {1000}
                to = {`projects/project/${project.projectPath}`}
            >
                {project.title}
            </MainMenuProjectSingleElement>
        </MainMenuSingleProjectInListContainer>
    ));

    return (
        <MainMenuCenterSingleSectionContainer>
            <MainMenuHeaderElement>
                last projects
            </MainMenuHeaderElement>
            <MainMenuProjectsList>
                {generateFirstProjects}
            </MainMenuProjectsList>
        </MainMenuCenterSingleSectionContainer>
    );
});

export default CenterContent;