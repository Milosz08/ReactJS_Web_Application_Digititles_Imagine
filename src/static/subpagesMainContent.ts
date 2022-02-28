/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: subpagesMainContent.ts
 * Last modified: 28/02/2022, 14:06
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

export interface SubpagesMainContentTypes {
    title?: string;
    description?: string;
    images: string[];
    activeImage?: string;
    listeners?: {
        ariaLabel: string;
        goto: React.MutableRefObject<any> | null;
    }[] | [];
}

export enum SubpagesContentKeys {
    MAIN = 'main',
    SERVICES = 'services',
    PROJECTS = 'projects',
    NOT_FOUND = 'error404',
}

export const SubpagesContent: { [key: string]: SubpagesMainContentTypes } = {
    main: {
        images: [ 'maincredits', 'endcredits', 'subtitles' ],
        listeners: [
            {
                ariaLabel: 'projects',
                goto: null,
            },
            {
                ariaLabel: 'services',
                goto: null,
            },
        ],
    },
    services: {
        title: 'Services',
        description: 'If you want to know what post-production typography services we provide, go below the page.',
        images: [ 'services', 'maincredits', 'endcredits', 'subtitles' ],
        listeners: [
            {
                ariaLabel: 'services details',
                goto: null,
            },
        ],
    },
    projects: {
        title: 'Projects',
        description: 'If you want to know what post-production typography services we provide, go below the page.',
        images: [ 'projects' ],
        listeners: [
            {
                ariaLabel: 'all projects',
                goto: null,
            },
        ],
    },
    error404: {
        title: '404 Page not found',
        description: 'We are very sorry, but such a page was not found. If you think this is a mistake, ' +
            'please contact us using the form.',
        images: [ '404' ],
    },
};