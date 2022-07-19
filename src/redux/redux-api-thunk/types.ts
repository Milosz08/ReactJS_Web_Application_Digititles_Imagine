/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: types.ts
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

export enum ReduxAPIreducerTypes {
    ADD_ELEMENT_FROM_DB = 'ADD_ELEMENT_FROM_DB__[DATA THUNK REDUCER]',
    ADD_ALL_ELEMENTS_FROM_DB = 'ADD_ALL_ELEMENTS_FROM_DB__[DATA THUNK REDUCER]',
    EDIT_ELEMENT_FROM_DB = 'EDIT_ELEMENT_FROM_DB__[DATA THUNK REDUCER]',
    DELETE_ELEMENT_FROM_DB = 'DELETE_ELEMENT_FROM_DB__[DATA THUNK REDUCER]',
    SET_REQUEST_ERROR = 'SET_REQUEST_ERROR__[DATA THUNK REDUCER]',
    SET_REQUEST_LOADING = 'SET_REQUEST_LOADING__[DATA THUNK REDUCER]',
    SET_SESSION_COUNTER = 'SET_SESSION_COUNTER__[DATA THUNK REDUCER]',
    SET_CMS_CREDENTIALS_FIELDS = 'SET_CMS_CREDENTIALS_FIELDS__[DATA THUNK REDUCER]',
    UPDATE_SELECTED_PROJECT = 'UPDATE_SELECTED_PROJECT__[DATA THUNK REDUCER]',
    SET_MESSAGE_ON_UPLOAD_IMAGE = 'SET_MESSAGE_ON_UPLOAD_IMAGE__[DOM MANIPULATE REDUCER]',
    ADD_IMAGE_URI_TO_UPLOAD_ARRAY = 'ADD_IMAGE_URI_TO_UPLOAD_ARRAY__[DOM MANIPULATE REDUCER]',
    REMOVE_IMAGE_URI_FROM_UPLOAD_ARRAY = 'REMOVE_IMAGE_URI_FROM_UPLOAD_ARRAY__[DOM MANIPULATE REDUCER]',
}

export enum ReduxAPIstateKeys {
    PROJECTS = 'projects',
    IMAGES = 'projectsPhotos',
    LOADING_PROJECTS = 'loadingProjects',
    LOADING_IMAGES = 'loadingImages',
    REGISTRATION_FORMS = 'registrationForms',
    MESSAGE_FORMS = 'messageForms',
    LOADING_REGISTRATION_FORMS = 'loadingRegistrationForms',
    LOADING_MESSAGE_FORMS = 'loadingMessageForms',
}

export enum CmsCredentialsLevels {
    UNDEFINED = 'UNDEFINED',
    ADMINISTRATOR = 'ADMINISTRATOR',
    MODERATOR = 'MODERATOR',
}

export enum CmsChangeCredentialsKeys {
    MODE = 'mode',
    LOGIN_ERROR = 'loginError',
    PASSWORD_ERROR = 'passwordError',
    REPEAT_PASSWORD_ERROR = 'repeatPasswordError',
}