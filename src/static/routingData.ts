/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: routingData.ts
 * Last modified: 21/02/2022, 19:03
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

import MainPageReact from '../pages/MainPageReact';
import ServicesPageReact from '../pages/ServicesPageReact';
import GettingStartedPageReact from '../pages/GettingStartedPageReact';
import PrivacyPolicyPageReact from '../pages/PrivacyPolicyPageReact';
import ProjectsPageReact from '../pages/ProjectsPageReact';
import SingleProjectPageReact from '../pages/SingleProjectPageReact';

const DEF_PREFIX: string = 'Digititles Imagine | ';

export const BasicAppRouting = [
    {
        path: '/',
        ariaLabel: 'Main, End credits & Subtitles for filmmakers',
        component: MainPageReact,
    },
    {
        path: '/services',
        ariaLabel: 'Services',
        component: ServicesPageReact,
    },
    {
        path: '/getting-started',
        ariaLabel: 'Getting Started',
        component: GettingStartedPageReact,
    },
    {
        path: '/privacy-policy',
        ariaLabel: 'Privacy Policy',
        component: PrivacyPolicyPageReact,
    },
    {
        path: '/projects',
        ariaLabel: 'Projects',
        component: ProjectsPageReact,
    },
    {
        path: '/projects/:projectId',
        ariaLabel: null,
        component: SingleProjectPageReact,
    },
] as const;

export enum RoutingBackEndpoints {

}

// eslint-disable-next-line import/no-anonymous-default-export
export default(type: string) => DEF_PREFIX + type;