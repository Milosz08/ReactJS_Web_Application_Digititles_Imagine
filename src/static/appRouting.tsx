/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: appRouting.tsx
 * Last modified: 24/02/2022, 15:04
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
import { Navigate, RouteObject } from 'react-router-dom';

import TitleInjectionHOC from '../high-order-components/TitleInjectionHOC';

import MainPageReact from '../pages/MainPageReact';
import Error404PageReact from '../pages/Error404PageReact';
import LoginPageReact from '../pages/LoginPageReact';
import CmsMainPageReact from '../pages/CmsMainPageReact';
import CmsChangeCredentialsPageReact from '../pages/CmsChangeCredentialsPageReact';
import CmsModifyProjects from '../pages/CmsModifyProjects';
import CmsModifySingleProject from '../pages/CmsModifySingleProject';
import GettingStartedPageReact from '../pages/GettingStartedPageReact';
import ServicesPageReact from '../pages/ServicesPageReact';
import ProjectsPageReact from '../pages/ProjectsPageReact';
import SingleProjectPageReact from '../pages/SingleProjectPageReact';


export enum RoutingPaths {
    START = '/',
    ERROR = '/404',
    LOGIN = '/login',
    ADMIN_PANEL = '/admin-panel',
    CHANGE_CREDENTIALS = 'change-credentials',
    MODIFY_PROJECTS = 'modify-projects',
    PROJECT_WITH_ID = 'project/:projectTitle',
    GETTING_STARTED = '/getting-started',
    SERVICES = '/services',
    PRIVACY_POLICY = '/privacy-policy',
    PROJECTS = '/projects',
}

export const appRouting = (isLogged: boolean): RouteObject[] => [
    {
        path: RoutingPaths.START,
        children: [
            {
                index: true,
                element: <TitleInjectionHOC title = 'Main, End credits & Subtitles' Component = {MainPageReact} />,
            },
            {
                path: RoutingPaths.ERROR,
                element: <TitleInjectionHOC title = '404 Not found' Component = {Error404PageReact} />,
            },
            {
                path: '*',
                element: <TitleInjectionHOC title = '404 Not found' Component = {Error404PageReact} />,
            },
        ],
    },
    {
        path: RoutingPaths.LOGIN,
        element: !isLogged
            ? <TitleInjectionHOC title = 'Login' Component = {LoginPageReact} />
            : <Navigate to = '/admin-panel'/>,
    },
    {
        path: RoutingPaths.ADMIN_PANEL,
        element: isLogged
            ? <TitleInjectionHOC ifAdminPanel title = 'Dasboard' Component = {CmsMainPageReact} />
            : <Navigate to = {RoutingPaths.LOGIN} />,
        children: [
            {
                path: RoutingPaths.CHANGE_CREDENTIALS,
                element: <TitleInjectionHOC
                    ifAdminPanel
                    title = 'Change Credentials'
                    Component = {CmsChangeCredentialsPageReact}
                />,
            },
            {
                path: RoutingPaths.MODIFY_PROJECTS,
                children: [
                    {
                        index: true,
                        element: <TitleInjectionHOC
                            ifAdminPanel
                            title = 'Modify Projects'
                            Component = {CmsModifyProjects}
                        />,
                    },
                    {
                        path: RoutingPaths.PROJECT_WITH_ID,
                        element: <TitleInjectionHOC ifAdminPanel title = '' Component = {CmsModifySingleProject} />,
                    },
                ],
            },
        ],
    },
    {
        path: RoutingPaths.GETTING_STARTED,
        element: <TitleInjectionHOC title = 'Getting Started' Component = {GettingStartedPageReact} />,
    },
    {
        path: RoutingPaths.SERVICES,
        element: <TitleInjectionHOC title = 'Services' Component = {ServicesPageReact} />,
    },
    {
        path: RoutingPaths.PROJECTS,
        children: [
            {
                index: true,
                element: <TitleInjectionHOC title = 'Projects' Component = {ProjectsPageReact} />,
            },
            {
                path: RoutingPaths.PROJECT_WITH_ID,
                element: <TitleInjectionHOC title = '' Component = {SingleProjectPageReact} />,
            },
        ],
    },
];