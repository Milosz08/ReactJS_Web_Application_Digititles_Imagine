/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: reducer.ts
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

import { InitStateAPI, InitStateAPItypes } from './initialState';

import Utils from '../utils';
import { ReduxAPIreducerTypes } from './types';
import { FILMMAKER_MIN_SMALL } from '../../static/gettingStartedContent';

const reduxReducerAPI = (state = InitStateAPI, action: any): InitStateAPItypes => {
    switch (Utils.normalised(action.type)) {

        case ReduxAPIreducerTypes.ADD_ELEMENT_FROM_DB: {
            const { elementToSend, elementType } = action.payload;
            return {
                ...state, [elementType]: [ ...state[elementType], elementToSend ]
            };
        }

        case ReduxAPIreducerTypes.ADD_ALL_ELEMENTS_FROM_DB: {
            const { arrayOfObjects, elementType, loadingElement } = action.payload;
            return { ...state, status: { ...state.status, [loadingElement]: false }, [elementType]: arrayOfObjects };
        }

        case ReduxAPIreducerTypes.EDIT_ELEMENT_FROM_DB: {
            const { elementToSend, elementType, elementId } = action.payload;
            const updateState = state[elementType];
            const findSearchId = state[elementType].findIndex((el: typeof elementType) => elementId === el.id);
            if (findSearchId === -1) {
                return state;
            }
            updateState[findSearchId] = elementToSend;
            return { ...state, [elementType]: updateState };
        }

        case ReduxAPIreducerTypes.MARK_USER_MESSAGE_AS_VIEWED: {
            const { messageId } = action.payload;
            const updateState = state.messageForms;
            const findSearchElementIndex = state.messageForms.findIndex(message => message.id === messageId);
            if (findSearchElementIndex === -1) {
                return state;
            }
            updateState[findSearchElementIndex].ifViewed = true;
            return { ...state, messageForms: updateState };
        }

        case ReduxAPIreducerTypes.DELETE_ELEMENT_FROM_DB: {
            const { elementType, elementId } = action.payload;
            const excludedItem = state[elementType].filter((el: typeof elementType) => elementId !== el.id);
            return { ...state, [elementType]: excludedItem };
        }

        case ReduxAPIreducerTypes.SET_REQUEST_LOADING: {
            const { loadingElement } = action.payload;
            return { ...state, status: { ...state.status, [loadingElement]: true } };
        }

        case ReduxAPIreducerTypes.SET_REQUEST_ERROR: {
            const { message } = action.payload;
            return { ...state, status: { ...state.status, error: message } };
        }

        case ReduxAPIreducerTypes.SET_FIELD_IN_REGISTRATION_FORM: {
            const { type, value } = action.payload;
            const findKey = Object.keys(state.registrationForm).find(key => key === type);
            if (!findKey) {
                return state;
            }
            return { ...state, registrationForm: { ...state.registrationForm, [findKey]: value } };
        }

        case ReduxAPIreducerTypes.CLEAR_ALL_REGISTRATION_FORM: {
            return { ...state, registrationForm: {
               username: '', email: '', lastname: '', message: '',
               serviceType: '', filmmakerBudget: FILMMAKER_MIN_SMALL, filmmakerSize: ''
            }};
        }

        case ReduxAPIreducerTypes.SET_FIELD_IN_MESSAGE_FORM: {
            const { type, value } = action.payload;
            return { ...state, messageForm: { ...state.messageForm, [type]: value } };
        }

        case ReduxAPIreducerTypes.CLEAR_ALL_MESSAGE_FORM: {
            return { ...state, messageForm: { username: '', lastname: '', email: '', message: '' } };
        }

        case ReduxAPIreducerTypes.SET_ERROR_IN_FORM_FIELD: {
            const { formType, fieldKey, value } = action.payload;
            return { ...state, [formType + 'Errors']: { ...state[formType + 'Errors'], [fieldKey]: Boolean(value) } };
        }

        case ReduxAPIreducerTypes.SET_CMS_CREDENTIALS_FIELDS: {
            const { ifLogged, role, bearerToken } = action.payload;
            return { ...state, sessionInfo: {
                ...state.sessionInfo, ifLogged, role, bearerToken: `Bearer ${bearerToken}`
            }};
        }

        case ReduxAPIreducerTypes.SET_SESSION_COUNTER: {
            const { counter: estimateSessionTime } = action.payload;
            return { ...state, sessionInfo: { ...state.sessionInfo, estimateSessionTime } };
        }

        case ReduxAPIreducerTypes.CHANGE_CREDENTIALS_FORM_ELEMENT: {
            const { elementKey, value } = action.payload;
            return { ...state, changeCredentialsForm: { ...state.changeCredentialsForm, [elementKey]: value } };
        }

        case ReduxAPIreducerTypes.INSERT_PROJECT_FORM_ELEMENT: {
            const { elementKey, value, mode } = action.payload;
            const currentMode = mode === ProjectFormEditableMode.NORMAL ? 'projectDataForm' : 'projectDataFormErrors';
            return { ...state, [currentMode]: { ...state.projectDataForm, [elementKey]: value } };
        }

        case ReduxAPIreducerTypes.INSERT_EXISTING_PROJECT_DATA_TO_FORM: {
            const { projectId } = action.payload;
            const findExistingProject = state.projects.find(project => project.id === projectId);
            if (!findExistingProject) {
                return state;
            }
            const { title, embedCode, prodCompany, prodYear, aboutSection, prodSection } = findExistingProject;
            const aboutParagraphs = aboutSection.map(el => el.paragraph);
            const prodParagraphs = prodSection.map(el => el.paragraph);
            return { ...state, projectDataForm: {
                title, embedCode, prodCompany, prodYear, aboutSection: aboutParagraphs, prodSection: prodParagraphs
                }, projectDataFormErrors: {
                    ...state.projectDataFormErrors,
                    prodSection: Array.from({ length: prodSection.length }, () => false),
                    aboutSection: Array.from({ length: aboutSection.length }, () => false),
                }
            };
        }

        case ReduxAPIreducerTypes.CLEAR_ALL_PROJECT_FORM_ELEMENTS: {
            return { ...state, projectDataForm: {
                title: '', prodYear: '', prodCompany: '', embedCode: '', prodSection: [ '' ], aboutSection: [ '' ],
            }, projectDataFormErrors: {
                title: false, embedCode: false, prodCompany: false, prodYear: false,
                prodSection: [ false ], aboutSection: [ false ],
            } };
        }

        case ReduxAPIreducerTypes.CHANGE_PROJECT_ARRAY_CONTENT_VALUE: {
            const { arrayType, index, value } = action.payload;
            const newState = state.projectDataForm[arrayType];
            newState[index] = value;
            return { ...state, projectDataForm: { ...state.projectDataForm, [arrayType]: newState } };
        }

        case ReduxAPIreducerTypes.ADD_PROJECT_ARRAY_PARAGRAPH_ELEMENT: {
            const { arrayType } = action.payload;
            return { ...state, projectDataForm: {
                ...state.projectDataForm, [arrayType]: [ ...state.projectDataForm[arrayType], '' ],
            }, projectDataFormErrors: {
                ...state.projectDataFormErrors, [arrayType]: [ ...state.projectDataFormErrors[arrayType], false ],
            }};
        }

        case ReduxAPIreducerTypes.REMOVE_PROJECT_ARRAY_PARAGRAPH_ELEMENT: {
            const { arrayType, index } = action.payload;
            const arrayWithoutElement = state.projectDataForm[arrayType].filter((_: any, idx: number) => idx !== index);
            const errorsArray = [...state.projectDataFormErrors[arrayType]];
            errorsArray.splice(index, 1);
            return { ...state, projectDataForm: {
                ...state.projectDataForm, [arrayType]: arrayWithoutElement
            }, projectDataFormErrors: {
                ...state.projectDataFormErrors, [arrayType]: errorsArray
            } };
        }

        default: {
            return state;
        }
    }
};

export default reduxReducerAPI;