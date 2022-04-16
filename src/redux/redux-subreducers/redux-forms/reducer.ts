/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: reducer.ts
 * Last modified: 16/04/2022, 13:56
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

import Utils from '../../utils';
import { ReduxFormsReducerTypes } from './types';

import { FILMMAKER_MIN_SMALL } from '../../../static/gettingStartedContent';
import { InitStateAPI, InitStateAPItypes } from '../../redux-api-thunk/initialState';


const reduxReducerForms = (state = InitStateAPI, action: any): InitStateAPItypes => {
    switch (Utils.normalised(action.type)) {

        case ReduxFormsReducerTypes.SET_FIELD_IN_REGISTRATION_FORM: {
            const { type, value } = action.payload;
            const findKey = Object.keys(state.registrationForm).find(key => key === type);
            if (!findKey) {
                return state;
            }
            return { ...state,
                registrationForm: { ...state.registrationForm,
                    [findKey]: value,
                },
            };
        }

        case ReduxFormsReducerTypes.CLEAR_ALL_REGISTRATION_FORM: {
            return { ...state,
                registrationForm: {
                    username: '', email: '', lastname: '', message: '', serviceType: '',
                    filmmakerBudget: FILMMAKER_MIN_SMALL, filmmakerSize: '',
                },
            };
        }

        case ReduxFormsReducerTypes.SET_FIELD_IN_MESSAGE_FORM: {
            const { type, value } = action.payload;
            return { ...state,
                messageForm: { ...state.messageForm,
                    [type]: value,
                },
            };
        }

        case ReduxFormsReducerTypes.CLEAR_ALL_MESSAGE_FORM: {
            return { ...state,
                messageForm: {
                    username: '', lastname: '', email: '', message: '',
                },
            };
        }

        case ReduxFormsReducerTypes.SET_ERROR_IN_FORM_FIELD: {
            const { formType, fieldKey, value } = action.payload;
            return { ...state, [formType + 'Errors']: { ...state[formType + 'Errors'], [fieldKey]: Boolean(value) } };
        }

        case ReduxFormsReducerTypes.CHANGE_CREDENTIALS_FORM_ELEMENT: {
            const { elementKey, value } = action.payload;
            return { ...state,
                changeCredentialsForm: { ...state.changeCredentialsForm,
                    [elementKey]: value,
                },
            };
        }

        case ReduxFormsReducerTypes.MARK_USER_MESSAGE_AS_VIEWED: {
            const { messageId } = action.payload;
            const updateState = state.messageForms;
            const findSearchElementIndex = state.messageForms.findIndex(message => message.id === messageId);
            if (findSearchElementIndex === -1) {
                return state;
            }
            updateState[findSearchElementIndex].ifViewed = true;
            return { ...state,
                messageForms: updateState,
            };
        }

        default: {
            return state;
        }
    }
}

export default reduxReducerForms;