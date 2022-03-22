/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useInsertProjectInModifyProjectPage.ts
 * Last modified: 22/03/2022, 14:25
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

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { RoutingPaths } from '../../static/appRouting';
import useChangePageTitle from '../reusable/useChangePageTitle';

import { RootState } from '../../redux/store';
import { ProjectTypes } from '../../redux/redux-api-thunk/elementTypes';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

/**
 * Custom hook responsible for load initial content on modify single project cms section (and return found
 * project; if not find project, return undefined value).
 *
 * @return { ProjectTypes } - selected project.
 */
const useInsertProjectInModifyProjectPage = (): ProjectTypes | undefined => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const { projectTitle } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatcher = useDispatch();

    const findingProject = projects.find(project => project.projectPath === projectTitle);
    useChangePageTitle(Boolean(findingProject) ? findingProject!.title : 'Project not found', true);

    // on initial load setting redux state, if not found force goto previous page; on unmount component cleared state
    useEffect(() => {
        const { CMS__ADMIN_PANEL, CMS__PROJECTS } = RoutingPaths;
        if (Boolean(findingProject)) {
            const { title, projectColours } = findingProject!;
            dispatcher(ReduxDOMActions.insertCmsSelectedProject(title, projectColours.strongForeground));
        } else {
            navigate({ pathname: CMS__ADMIN_PANEL + '/' + CMS__PROJECTS });
        }
        return () => {
            dispatcher(ReduxDOMActions.insertCmsSelectedProject());
        };
    }, [ dispatcher, findingProject, navigate, pathname]);

    return findingProject;
};

export default useInsertProjectInModifyProjectPage;