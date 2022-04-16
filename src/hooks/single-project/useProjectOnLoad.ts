/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useProjectOnLoad.ts
 * Last modified: 06/03/2022, 03:11
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

import { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RoutingPaths } from '../../static/appRouting';
import useChangePageTitle from '../reusable/useChangePageTitle';
import { SubpagesContent, SubpagesContentKeys, SubpagesMainContentTypes } from '../../static/subpagesMainContent';

import { RootState } from '../../redux/store';
import { ProjectModel } from '../../redux/redux-models/ProjectModel';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

/**
 * Custom hook responsible for finding and inserting data of single project. When hook not find matched project
 * to saved ID value, then move to 404 page.
 *
 * @param projectTitle { string } - project title (from URL params).
 * @return { [ ProjectModel, SubpagesMainContentTypes, string ] } - first: foundProject, second: project main page
 *         content, third: project main photo element.
 */
const useProjectOnLoad = (projectTitle: string): [ ProjectModel, SubpagesMainContentTypes, string ] => {

    const { projects, projectsPhotos, status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const foundProject = projects.find(project => project.projectPath === projectTitle)!;
    SubpagesContent[SubpagesContentKeys.PROJECT].dotColor = foundProject?.projectColours.strongForeground;

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [ findingProject, setFindingProject ] = useState<ProjectModel>();
    const [ photo, setPhoto ] = useState<string>();
    const [ content, setContent ] = useState<SubpagesMainContentTypes>(SubpagesContent[SubpagesContentKeys.PROJECT]);

    useChangePageTitle(findingProject ? findingProject.title : 'Loading...', false);

    // On load component added project values
    useLayoutEffect(() => {
        if (!(status.loadingProjects && !status.loadingImages)) {
            const foundProject = projects.find(project => project.projectPath === projectTitle)!;
            if (foundProject) {
                const mainImage = projectsPhotos
                    .find(project => project.projectId === foundProject?.id)!
                    .projectImages.find(image => image.name.toLocaleLowerCase().includes('main'))!;
                setPhoto(mainImage.url);
                setFindingProject(foundProject);
                setContent(prevState => ({ ...prevState, title: foundProject.title }));
            } else {
                navigate({ pathname: RoutingPaths.ERROR });
            }
        }
    }, [ navigate, pathname, projectTitle, projects, projectsPhotos, status ]);

    return [ findingProject!, content, photo! ];
};

export default useProjectOnLoad;