/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: actions.ts
 * Last modified: 16/04/2022, 13:58
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

import { AllFormsTypes, MessageFormInputs, ReduxFormsReducerTypes, RegistrationFormInputs } from './types';
import { CmsChangeCredentialsKeys } from '../../redux-api-thunk/types';


interface ReturnedToReducer {
    type: ReduxFormsReducerTypes | string;
    payload?: {
        [key: string]: any;
    };
}

export class ReduxFormsActions {

    public static setFieldInRegistrationForm = (type: RegistrationFormInputs, value: any): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.SET_FIELD_IN_REGISTRATION_FORM,
        payload: {
            type, value,
        }
    });

    public static clearAllRegistrationForm = (): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.CLEAR_ALL_REGISTRATION_FORM,
    });

    public static setFieldInMessageForm = (type: MessageFormInputs, value: string): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.SET_FIELD_IN_MESSAGE_FORM,
        payload: {
            type, value,
        }
    });

    public static clearAllMessageForm = (): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.CLEAR_ALL_MESSAGE_FORM,
    });

    public static setErrorInFormField = (
        formType: AllFormsTypes, fieldKey: MessageFormInputs, value?: boolean
    ): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.SET_ERROR_IN_FORM_FIELD,
        payload: {
            formType, fieldKey, value,
        }
    });

    public static changeCredentialsFormElement = (elementKey: CmsChangeCredentialsKeys, value: any): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.CHANGE_CREDENTIALS_FORM_ELEMENT,
        payload: {
            elementKey, value
        }
    });

    public static markUserMessageAsViewed = (messageId: string): ReturnedToReducer => ({
        type: ReduxFormsReducerTypes.MARK_USER_MESSAGE_AS_VIEWED,
        payload: {
            messageId,
        }
    });

}