/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useNextProjectLink.ts
 * Last modified: 11/03/2022, 00:22
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

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { NextElementProps, NextElementPropTypes } from '../../static/nextElementProps';

import { RootState } from '../../redux/store';
import { ProjectModel } from '../../redux/redux-models/ProjectModel';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

/**
 * Custom hook responsible for fill next prop object based next element in array of
 * all projects elements.
 *
 * @param findingProject { ProjectModel } - found project in react component.
 * @return { NextElementPropTypes } - modified prop object.
 */
const useNextProjectLink = (findingProject: ProjectModel): NextElementPropTypes => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const [ content, setContent ] = useState<NextElementPropTypes>(NextElementProps.project);

    useEffect(() => {
        if (findingProject) {
            const findProjectIdx = projects.findIndex(project => project.id === findingProject.id);
            const ifEnd = findProjectIdx === projects.length - 1;
            setContent({
                ...content,
                header: projects[ifEnd ? 0 : findProjectIdx + 1].title,
                pathTo: `/projects/project/${projects[ifEnd ? 0 : findProjectIdx + 1].projectPath}`,
                dotColor: projects[ifEnd ? 0 : findProjectIdx + 1].projectColours.strongForeground,
            });
        }
    }, [ findingProject ]);

    return content;
};

export default useNextProjectLink;