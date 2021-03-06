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

import Utils from '../utils';
import { InitStateAPI, InitStateAPItypes } from './initialState';

import { ReduxAPIreducerTypes, ReduxAPIstateKeys } from './types';
import { ImageUploadMode } from '../../static/imageUploadContainers';


const reduxReducerAPI = (state = InitStateAPI, action: any): InitStateAPItypes => {
    switch (Utils.normalised(action.type)) {

        case ReduxAPIreducerTypes.ADD_ELEMENT_FROM_DB: {
            const { elementToSend, elementType } = action.payload;
            return {
                ...state,
                [elementType]: [
                    ...state[elementType], elementToSend,
                ],
            };
        }

        case ReduxAPIreducerTypes.ADD_ALL_ELEMENTS_FROM_DB: {
            const { arrayOfObjects, elementType, loadingElement } = action.payload;
            let arrayOfObjectPossiblyReversed = arrayOfObjects;
            if (elementType === ReduxAPIstateKeys.PROJECTS) {
                arrayOfObjectPossiblyReversed = arrayOfObjects.reverse();
            }
            return { ...state,
                status: { ...state.status,
                    [loadingElement]: false
                },
                [elementType]: arrayOfObjectPossiblyReversed,
            };
        }

        case ReduxAPIreducerTypes.EDIT_ELEMENT_FROM_DB: {
            const { elementToSend, elementType, elementId } = action.payload;
            const updateState = state[elementType];
            const findSearchId = state[elementType].findIndex((el: typeof elementType) => elementId === el.id);
            if (findSearchId === -1) {
                return state;
            }
            updateState[findSearchId] = elementToSend;
            return { ...state,
                [elementType]: updateState,
            };
        }

        case ReduxAPIreducerTypes.DELETE_ELEMENT_FROM_DB: {
            const { elementType, elementId } = action.payload;
            const excludedItem = state[elementType].filter((el: typeof elementType) => elementId !== el.id);
            return { ...state,
                [elementType]: excludedItem,
            };
        }

        case ReduxAPIreducerTypes.SET_REQUEST_LOADING: {
            const { loadingElement } = action.payload;
            return { ...state,
                status: { ...state.status,
                    [loadingElement]: true,
                },
            };
        }

        case ReduxAPIreducerTypes.SET_REQUEST_ERROR: {
            const { message } = action.payload;
            return { ...state,
                status: { ...state.status,
                    error: message,
                },
            };
        }

        case ReduxAPIreducerTypes.SET_CMS_CREDENTIALS_FIELDS: {
            const { ifLogged, role, bearerToken } = action.payload;
            return { ...state,
                sessionInfo: { ...state.sessionInfo,
                    ifLogged, role, bearerToken: `Bearer ${bearerToken}`,
                },
            };
        }

        case ReduxAPIreducerTypes.SET_SESSION_COUNTER: {
            const { counter: estimateSessionTime } = action.payload;
            return { ...state,
                sessionInfo: { ...state.sessionInfo,
                    estimateSessionTime,
                },
            };
        }

        case ReduxAPIreducerTypes.UPDATE_SELECTED_PROJECT: {
            const { projectId, updatedProject } = action.payload;
            const newStateProject = [ ...state.projects ];
            const findSearchProjectIndex = state.projects.findIndex(project => project.id === projectId);
            if (findSearchProjectIndex !== -1) {
                newStateProject[findSearchProjectIndex] = updatedProject;
            }
            return { ...state,
                projects: newStateProject,
            };
        }

        case ReduxAPIreducerTypes.SET_MESSAGE_ON_UPLOAD_IMAGE: {
            const { imageContainerType, ifError, messageContent } = action.payload;
            return { ...state,
                imageUploadProperties: { ...state.imageUploadProperties,
                    [imageContainerType]: { ...state.imageUploadProperties[imageContainerType],
                        onUploadImageMessage: messageContent,
                        ifErrorWhileUploadingImage: ifError,
                    },
                },
            };
        }

        case ReduxAPIreducerTypes.ADD_IMAGE_URI_TO_UPLOAD_ARRAY: {
            const { imageType, imageURI } = action.payload;
            return { ...state,
                imageUploadProperties: { ...state.imageUploadProperties,
                    [imageType]: { ...state.imageUploadProperties[imageType],
                        imagesUriShortcutArray: [ ...state.imageUploadProperties[imageType].imagesUriShortcutArray, imageURI ],
                    },
                },
            };
        }

        case ReduxAPIreducerTypes.REMOVE_IMAGE_URI_FROM_UPLOAD_ARRAY: {
            const { imageType, imageURI } = action.payload;
            const imagesAfterRemove = state.imageUploadProperties[imageType].imagesUriShortcutArray
                .filter((uri: string) => uri !== imageURI);
            return { ...state,
                imageUploadProperties: { ...state.imageUploadProperties,
                    [imageType]: { ...state.imageUploadProperties[imageType],
                        imagesUriShortcutArray: imagesAfterRemove,
                    },
                },
            };
        }

        case ReduxAPIreducerTypes.CLEAR_ALL_IMAGE_URI_ARRAYS: {
            return { ...state,
                imageUploadProperties: {
                    [ImageUploadMode.MAIN_IMAGE]: {
                        onUploadImageMessage: '',
                        defaultFileName: 'Main',
                        ifErrorWhileUploadingImage: false,
                        imagesUriShortcutArray: [],
                    },
                    [ImageUploadMode.ASSEMBLY_IMAGE]: {
                        onUploadImageMessage: '',
                        defaultFileName: 'Img',
                        ifErrorWhileUploadingImage: false,
                        imagesUriShortcutArray: [],
                    },
                    [ImageUploadMode.BACKGROUND_IMAGE]: {
                        onUploadImageMessage: '',
                        defaultFileName: 'Paralax',
                        ifErrorWhileUploadingImage: false,
                        imagesUriShortcutArray: [],
                    },
                },
            };
        }

        default: {
            return state;
        }
    }
};

export default reduxReducerAPI;