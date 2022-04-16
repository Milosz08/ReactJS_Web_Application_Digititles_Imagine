/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: types.ts
 * Last modified: 16/04/2022, 13:57
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

export enum ReduxFormsReducerTypes {
    SET_FIELD_IN_REGISTRATION_FORM = 'SET_FIELD_IN_REGISTRATION_FORM__[FORMS REDUCER]',
    CLEAR_ALL_REGISTRATION_FORM = 'CLEAR_ALL_REGISTRATION_FORM__[FORMS REDUCER]',
    SET_FIELD_IN_MESSAGE_FORM = 'SET_FIELD_IN_MESSAGE_FORM__[FORMS REDUCER]',
    CLEAR_ALL_MESSAGE_FORM = 'CLEAR_ALL_MESSAGE_FORM__[FORMS REDUCER]',
    SET_ERROR_IN_FORM_FIELD = 'SET_ERROR_IN_FORM_FIELD__[FORMS REDUCER]',
    CHANGE_CREDENTIALS_FORM_ELEMENT = 'CHANGE_CREDENTIALS_FORM_ELEMENT__[FORMS REDUCER]',
    MARK_USER_MESSAGE_AS_VIEWED = 'MARK_USER_MESSAGE_AS_VIEWED__[FORMS REDUCER]',
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

export enum AllFormsTypes {
    REGISTRATION = 'registrationForm',
    MESSAGE = 'messageForm',
}