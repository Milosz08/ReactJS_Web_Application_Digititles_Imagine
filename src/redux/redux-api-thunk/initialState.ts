/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: initialState.ts
 * Last modified: 01/03/2022, 23:42
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

import { MessagesFormTypes, ProjectImagesTypes, ProjectTypes, RegistrationFormTypes } from './elementTypes';
import { FILMMAKER_MIN_SMALL } from '../../static/gettingStartedContent';

export interface InitStateAPItypes {
    projects: ProjectTypes[];
    projectsPhotos: ProjectImagesTypes[];
    registrationForms: RegistrationFormTypes[];
    messageForms: MessagesFormTypes[];
    status: {
        loadingProjects: boolean;
        loadingImages: boolean;
        error: string;
    };
    registrationForm: {
        username: string;
        lastname: string;
        email: string;
        message: string;
        serviceType: string;
        filmmakerSize: string;
        filmmakerBudget: number;
    };
    registrationFormErrors: {
        username: boolean;
        lastname: boolean;
        email: boolean;
        message: boolean;
    };
    messageForm: MessagesFormTypes;
    messageFormErrors: {
        username: boolean;
        lastname: boolean;
        email: boolean;
        message: boolean;
    };
}

export const InitStateAPI: InitStateAPItypes = {
    projects: [],
    projectsPhotos: [],
    registrationForms: [],
    messageForms: [],
    status: {
        loadingProjects: true,
        loadingImages: true,
        error: '',
    },
    registrationForm: {
        username: '',
        lastname: '',
        email: '',
        message: '',
        serviceType: '',
        filmmakerSize: '',
        filmmakerBudget: FILMMAKER_MIN_SMALL,
    },
    registrationFormErrors: {
        username: false,
        lastname: false,
        email: false,
        message: false,
    },
    messageForm: {
        username: '',
        lastname: '',
        email: '',
        message: '',
    },
    messageFormErrors: {
        username: false,
        lastname: false,
        email: false,
        message: false,
    },
};