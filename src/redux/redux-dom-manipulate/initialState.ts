/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: initialState.ts
 * Last modified: 23/02/2022, 16:19
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

import { ProjectSections, ServicesSections } from './types';

export interface InitStateDOMtypes {
    currScrollPos: number;
    currScrollFromBottom: number;
    whileChangingRoutes: boolean;
    ifMenuOpen: boolean;
    hamActive: boolean;
    ifFixed: {
        background: boolean;
        navigation: boolean;
    };
    scrollPercentage: number;
    browserX: number;
    browserY: number;
    currentActiveServiceSection: string | null;
    onHoverActiveImageId: string | null;
    stillImage: boolean;
    scrollDisabledPx: number;
    totalHeight: number;
    activeSection: {
        project: ProjectSections;
        services: ServicesSections;
    };
}

export const InitStateDOM: InitStateDOMtypes = {
    currScrollPos: 0,
    currScrollFromBottom: 0,
    whileChangingRoutes: false,
    ifMenuOpen: false,
    hamActive: false,
    ifFixed: {
        background: true,
        navigation: true,
    },
    scrollPercentage: 0,
    browserX: 0,
    browserY: 0,
    currentActiveServiceSection: null,
    onHoverActiveImageId: null,
    stillImage: false,
    scrollDisabledPx: window.innerWidth - document.documentElement.clientWidth,
    totalHeight: 600,
    activeSection: {
        project: ProjectSections.TITLE,
        services: ServicesSections.MAIN_CREDITS,
    },
} as const;