/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: SingleProjectPageReact.tsx
 * Last modified: 21/02/2022, 21:44
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
import { createContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import useChangePageTitle from '../hooks/reusable/useChangePageTitle';

import { RootState } from '../redux/store';
import { ProjectTypes } from '../redux/redux-api-thunk/elementTypes';
import { InitStateAPItypes } from '../redux/redux-api-thunk/initialState';

import NavigationBottomBar from '../components/navigation-bottom-bar/NavigationBottomBar';
import Footer from '../components/footer/Footer';

export const ProjectContext = createContext<Partial<{ findProject: ProjectTypes }>>({});


const SingleProjectPageReact: React.FC = (): JSX.Element => {

    const { projects, status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const detailsRef = useRef(null);
    const { projectTitle } = useParams();
    const [ findingProject, setFindingProject ] = useState<ProjectTypes>();

    useChangePageTitle(findingProject ? findingProject.title : 'Project Title', false);

    useEffect(() => {
        const findingProject = projects.find(project => project.projectPath === projectTitle);
        if (!status.loading && findingProject) {
            setFindingProject(findingProject);
        }
    }, [ projectTitle, projects, status.loading ]);

    return (
        <ProjectContext.Provider
            value = {{ findProject: findingProject }}
        >
            <NavigationBottomBar
                listeners = {[ { ariaLabel: 'project details', goto: detailsRef } ]}
            />
            {Boolean(findingProject) && <>
                single project: {findingProject!.id}, {findingProject!.title}
                <div ref = {detailsRef}>details</div>
            </>}
            <Footer/>
        </ProjectContext.Provider>
    );
};

export default SingleProjectPageReact;