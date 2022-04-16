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
import { createContext } from 'react';

import { useParams } from 'react-router';

import { ProjectModel } from '../redux/redux-models/ProjectModel';
import { SubpagesContentKeys } from '../static/subpagesMainContent';

import useInsertRefOnLoad from '../hooks/reusable/useInsertRefOnLoad';
import useProjectOnLoad from '../hooks/single-project/useProjectOnLoad';
import useNextProjectLink from '../hooks/single-project/useNextProjectLink';
import useInsertHeightElement from '../hooks/reusable/useInsertHeightElement';

import NavigationBottomBar from '../components/navigation-bottom-bar/NavigationBottomBar';
import ProjectInitialFluidContent from '../components/project-initial-fluid-content/ProjectInitialFluidContent';
import NextElementSection from '../components/next-element-section/NextElementSection';
import Footer from '../components/footer/Footer';


export type ProjectContextTypes = { findProject: ProjectModel };
export const ProjectContext = createContext<Partial<ProjectContextTypes>>({});


const SingleProjectPageReact: React.FC = (): JSX.Element => {

    const { projectTitle } = useParams();

    const [ findingProject, content, photo ] = useProjectOnLoad(projectTitle!);
    const { allRefs, listeners } = useInsertRefOnLoad(SubpagesContentKeys.PROJECT);
    const nextProject = useNextProjectLink(findingProject);

    useInsertHeightElement(allRefs[0], Boolean(findingProject));

    return (
        <ProjectContext.Provider
            value = {{ findProject: findingProject }}
        >
            <NavigationBottomBar
                listeners = {listeners!}
            />
            {findingProject && <>
                <ProjectInitialFluidContent
                    content = {content}
                    photo = {photo}
                    referential = {allRefs[0]}
                />
                {nextProject.pathTo && <NextElementSection
                    content = {nextProject}
                    ifWhite = {true}
                />}
            </>}
            <Footer/>
        </ProjectContext.Provider>
    );
};

export default SingleProjectPageReact;