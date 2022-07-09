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


import { ProjectModel } from '../redux-models/ProjectModel';
import { ProjectFormModel } from '../redux-models/ProjectFormModel';
import { MessagesFormModel } from '../redux-models/MessagesFormModel';
import { ProjectImagesModel } from '../redux-models/ProjectImagesModel';
import { RegistrationFormModel } from '../redux-models/RegistrationFormModel';
import { ProjectFormErrorsModel } from '../redux-models/ProjectFormErrorsModel';

import {
    ProjectFormErrorsInitialState, ProjectFormInitialState
} from '../redux-subreducers/redux-project-form/initialObjects';

import { CmsCredentialsLevels } from './types';
import { FILMMAKER_MIN_SMALL } from '../../static/gettingStartedContent';


export interface InitStateAPItypes {
    projects: ProjectModel[];
    projectsPhotos: ProjectImagesModel[];
    registrationForms: RegistrationFormModel[];
    messageForms: MessagesFormModel[];
    status: {
        loadingProjects: boolean;
        loadingImages: boolean;
        loadingRegistrationForms: boolean;
        loadingMessageForms: boolean;
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
    messageForm: MessagesFormModel;
    messageFormErrors: {
        username: boolean;
        lastname: boolean;
        email: boolean;
        message: boolean;
    };
    changeCredentialsForm: {
        mode: CmsCredentialsLevels;
        loginError: boolean;
        passwordError: boolean;
        repeatPasswordError: boolean;
    };
    sessionInfo: {
        ifLogged: boolean;
        role: CmsCredentialsLevels;
        bearerToken: string;
        estimateSessionTime: number;
    };
    projectDataForm: ProjectFormModel;
    projectDataFormErrors: ProjectFormErrorsModel;
    projectFormIfActiveCustomProp: boolean[];
    addEditServerResponseMessage: string,
    ifServerResponseMessageError: boolean,
}

export const InitStateAPI: InitStateAPItypes = {
    projects: [],
    projectsPhotos: [],
    registrationForms: [],
    messageForms: [],
    status: {
        loadingProjects: true,
        loadingImages: true,
        loadingRegistrationForms: true,
        loadingMessageForms: true,
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
    changeCredentialsForm: {
        mode: CmsCredentialsLevels.ADMINISTRATOR,
        loginError: false,
        passwordError: false,
        repeatPasswordError: false,
    },
    sessionInfo: {
        ifLogged: false,
        role: CmsCredentialsLevels.UNDEFINED,
        bearerToken: '',
        estimateSessionTime: 0,
    },
    projectDataForm: ProjectFormInitialState,
    projectDataFormErrors: ProjectFormErrorsInitialState,
    projectFormIfActiveCustomProp: [ false ],
    addEditServerResponseMessage: '',
    ifServerResponseMessageError: false,
};