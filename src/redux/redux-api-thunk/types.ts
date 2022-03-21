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
    ADD_ELEMENT_FROM_DB = 'ADD_ELEMENT_FROM_DB__T',
    ADD_ALL_ELEMENTS_FROM_DB = 'ADD_ALL_ELEMENTS_FROM_DB__T',
    EDIT_ELEMENT_FROM_DB = 'EDIT_ELEMENT_FROM_DB__T',
    DELETE_ELEMENT_FROM_DB = 'DELETE_ELEMENT_FROM_DB__T',
    SET_REQUEST_ERROR = 'SET_REQUEST_ERROR__T',
    SET_REQUEST_LOADING = 'SET_REQUEST_LOADING__T',
    SET_FIELD_IN_REGISTRATION_FORM = 'SET_FIELD_IN_REGISTRATION_FORM__T',
    CLEAR_ALL_REGISTRATION_FORM = 'CLEAR_ALL_REGISTRATION_FORM__T',
    SET_FIELD_IN_MESSAGE_FORM = 'SET_FIELD_IN_MESSAGE_FORM__T',
    CLEAR_ALL_MESSAGE_FORM = 'CLEAR_ALL_MESSAGE_FORM__T',
    SET_ERROR_IN_FORM_FIELD = 'SET_ERROR_IN_FORM_FIELD__T',
    SET_CMS_CREDENTIALS_FIELDS = 'SET_CMS_CREDENTIALS_FIELDS__T',
    SET_SESSION_COUNTER = 'SET_SESSION_COUNTER__T',
}

export enum ReduxAPIstateKeys {
    PROJECTS = 'projects',
    IMAGES = 'projectsPhotos',
    LOADING_PROJECTS = 'loadingProjects',
    LOADING_IMAGES = 'loadingImages',
}

export enum RegistrationFormInputs {
    USERNAME = 'username',
    USER_LASTNAME = 'lastname',
    USER_EMAIL = 'email',
    USER_MESSAGE = 'message',
    SERVICE_TYPE = 'serviceType',
    FILMMAKER_SIZE = 'filmmakerSize',
    FILMMAKER_BUDGET = 'filmmakerBudget',
}

export enum RegistrationFormFields {
    MAIN_CREDITS = 'main_credits',
    END_CREDITS = 'end_credits',
    SUBTITLES = 'subtitles',
    SMALL = 'filmmaker_small',
    MEDIUM = 'filmmaker_medium',
    LARGE = 'filmmaker_large',
}

export enum MessageFormInputs {
    USER_NAME = 'username',
    LAST_NAME = 'lastname',
    EMAIL = 'email',
    MESSAGE = 'message',
}

export enum MessageFormInputsPlaceholders {
    username = 'Your firstname *',
    lastname = 'Your lastname',
    email = 'Your email *',
    message = 'Your message *',
}

export enum FieldAction {
    NORMAL = 'NORMAL',
    ERROR = 'ERROR',
}

export enum AllFormsTypes {
    REGISTRATION = 'registrationForm',
    MESSAGE = 'messageForm',
}

export enum CmsCredentialsLevels {
    UNDEFINED = 'UNDEFINED',
    ADMINISTRATOR = 'ADMINISTRATOR',
    MODERATOR = 'MODERATOR',
}