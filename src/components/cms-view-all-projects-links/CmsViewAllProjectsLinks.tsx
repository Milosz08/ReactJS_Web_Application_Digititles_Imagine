/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsViewAllProjectsLinks.tsx
 * Last modified: 27/03/2022, 00:27
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
import { RoutingPaths } from '../../static/appRouting';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import {
    CmsAddNewProjectLink, CmsSingleProjectLink, CmsViewAllProjectsLinksContainer
} from './CmsViewAllProjectsLinks.styles';

import { CmsMainPageArrowIcon } from '../cms-main-page-navigation/CmsMainPageNavigation.styles';


const CmsViewAllProjectsLinks: React.FC = (): JSX.Element => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const generateAllProjects: JSX.Element[] = projects.map(({ id, projectPath, title, projectColours }) => (
        <CmsSingleProjectLink
            key = {id}
            to = {projectPath}
            title = 'Click to edit project details'
            $dotColor = {projectColours.strongForeground}
        >
            {title}
            <CmsMainPageArrowIcon/>
        </CmsSingleProjectLink>
    ));

    return (
        <CmsViewAllProjectsLinksContainer>
            <CmsAddNewProjectLink
                to = {RoutingPaths.CMS__ADD_PROJECT}
                title = 'Click to add new project'
            >
                +
            </CmsAddNewProjectLink>
            {generateAllProjects}
        </CmsViewAllProjectsLinksContainer>
    );
};

export default CmsViewAllProjectsLinks;