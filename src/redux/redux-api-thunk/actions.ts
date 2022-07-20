/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: actions.ts
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

import { AxiosResponse } from 'axios';
import { CmsCredentialsLevels, ReduxAPIreducerTypes, ReduxAPIstateKeys } from './types';
import { ImageUploadMode } from '../../static/imageUploadContainers';


interface ReturnedToReducer {
    type: ReduxAPIreducerTypes | string;
    payload?: {
        [key: string]: any;
    };
}

export class ReduxAPIActions {

    public static addReduxStoreElement = (elementToSend: AxiosResponse, elementType: ReduxAPIstateKeys): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.ADD_ELEMENT_FROM_DB,
        payload: {
            elementToSend, elementType,
        }
    });

    public static addAllArrayObjectsStoreElements = (
        arrayOfObjects: AxiosResponse[], elementType: ReduxAPIstateKeys, loadingElement: ReduxAPIstateKeys
    ): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.ADD_ALL_ELEMENTS_FROM_DB,
        payload: {
            arrayOfObjects, elementType, loadingElement,
        }
    });

    public static updateReduxStoreElement = (
        elementToSend: AxiosResponse, elementType: ReduxAPIstateKeys, elementId: string
    ): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.EDIT_ELEMENT_FROM_DB,
        payload: {
            elementToSend, elementType, elementId,
        }
    });

    public static deleteReduxStoreElement = (elementType: ReduxAPIstateKeys, elementId: string): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.DELETE_ELEMENT_FROM_DB,
        payload: {
            elementType, elementId,
        }
    });

    public static setRequestError = (message: string): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.SET_REQUEST_ERROR,
        payload: {
            message,
        }
    });

    public static setRequestLoading = (loadingElement: ReduxAPIstateKeys): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.SET_REQUEST_LOADING,
        payload: {
            loadingElement,
        }
    });

    public static changeSessionInfo = (
        ifLogged: boolean, role: CmsCredentialsLevels, bearerToken: string
    ): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.SET_CMS_CREDENTIALS_FIELDS,
        payload: {
            ifLogged, role, bearerToken,
        }
    });

    public static setSessionCounter = (counter: number): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.SET_SESSION_COUNTER,
        payload: {
            counter,
        }
    });

    public static updateSelectedProject = (projectId: string, updatedProject: any): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.UPDATE_SELECTED_PROJECT,
        payload: {
            projectId, updatedProject,
        }
    });

    public static setMessageOnUploadImage = (
        imageContainerType: ImageUploadMode, messageContent: string, ifError: boolean = false
    ): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.SET_MESSAGE_ON_UPLOAD_IMAGE,
        payload: {
            imageContainerType, ifError, messageContent,
        }
    });

    public static addNewImageUriToSelectImageModeArray = (imageType: ImageUploadMode, imageURI: string): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.ADD_IMAGE_URI_TO_UPLOAD_ARRAY,
        payload: {
            imageType, imageURI,
        }
    });

    public static removeImageUriToSelectImageModeArray = (imageType: ImageUploadMode, imageURI: string): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.REMOVE_IMAGE_URI_FROM_UPLOAD_ARRAY,
        payload: {
            imageType, imageURI,
        }
    });

    public static clearAllImagesUriArrays = (): ReturnedToReducer => ({
        type: ReduxAPIreducerTypes.CLEAR_ALL_IMAGE_URI_ARRAYS,
    });

}