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

import { GettingStartedNavElms, ProjectSections, ServicesSections } from './types';
import { ReduxAPIstateKeys } from '../redux-api-thunk/types';
import { JavaApiEndpoints } from '../redux-api-thunk/request';

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
    headerLight: boolean;
    activeSection: {
        project: ProjectSections;
        services: ServicesSections | null;
    };
    gettingStartedActiveSection: GettingStartedNavElms | null;
    allActiveSections: GettingStartedNavElms[];
    cookiesNotifContainerHeight: number;
    modalsState: {
        ifWarningLogoutModalOpen: boolean;
        ifEndSessionModalOpen: boolean;
        ifDeleteContentModalOpen: boolean;
        ifMainImageUploadModeOpen: boolean;
        ifAssemblyImageUploadModeOpen: boolean;
        ifBackgroundImageUploadModeOpen: boolean;
    };
    deleteModalData: {
        dataId: string | null;
        dataContent: ReduxAPIstateKeys | null;
        endpoint: JavaApiEndpoints | null;
    };
    cmsSelectedProject: {
        title: string;
        dotColor: string;
    };
    formActiveElements: {
        registrationFormsActiveSection: string | null;
        messageFormsActiveSection: string | null;
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
    headerLight: false,
    activeSection: {
        project: ProjectSections.TITLE,
        services: null,
    },
    gettingStartedActiveSection: null,
    allActiveSections: [],
    cookiesNotifContainerHeight: 0,
    modalsState: {
        ifWarningLogoutModalOpen: false,
        ifEndSessionModalOpen: false,
        ifDeleteContentModalOpen: false,
        ifMainImageUploadModeOpen: false,
        ifAssemblyImageUploadModeOpen: false,
        ifBackgroundImageUploadModeOpen: false,
    },
    deleteModalData: {
        dataId: null,
        dataContent: null,
        endpoint: null,
    },
    cmsSelectedProject: {
        title: '',
        dotColor: '',
    },
    formActiveElements: {
        registrationFormsActiveSection: null,
        messageFormsActiveSection: null,
    },
};