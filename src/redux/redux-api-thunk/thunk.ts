/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: thunk.ts
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

import { axiosInstance, JavaApiEndpoints } from './request';

import { ReduxAPIstateKeys } from './types';
import { ImagesManipulator } from './images';
import { ReduxAPIActions } from './actions';

import { AllFormsTypes } from '../redux-subreducers/redux-forms/types';
import { ReduxFormsActions } from '../redux-subreducers/redux-forms/actions';
import { ReduxProjFormActions } from '../redux-subreducers/redux-project-form/actions';
import { ImageUploadMode } from '../../static/imageUploadContainers';


export class ReduxAPIThunk {

    public static getAllElements(endpoint: JavaApiEndpoints, key: ReduxAPIstateKeys, loading: ReduxAPIstateKeys) {
        return async (dispatcher: (prop: any) => void) => {
            dispatcher(ReduxAPIActions.setRequestLoading(loading));
            await axiosInstance.get(endpoint)
                .then(response => response)
                .then(data => dispatcher(ReduxAPIActions.addAllArrayObjectsStoreElements(data.data, key, loading)),
                    error => dispatcher(ReduxAPIActions.setRequestError(error.message || 'Unexpected error!')),
                );
        };
    };

    public static addPageFormToDatabase(
        element: any, formType: AllFormsTypes, endpoint: JavaApiEndpoints, headers: any
    ) {
        return async (dispatcher: (prop: any) => void) => {
            const { data } = await axiosInstance.post(endpoint, element, { headers });
            dispatcher(ReduxAPIActions.addReduxStoreElement(data, formType + 's' as ReduxAPIstateKeys));
        };
    };

    public static removeElementFromArray(elementId: string, elementKey: ReduxAPIstateKeys, endpoint: JavaApiEndpoints, headers: any) {
        return async (dispatcher: (prop: any) => void) => {
            await axiosInstance.delete(`${endpoint}/${elementId}`, { headers });
            dispatcher(ReduxAPIActions.deleteReduxStoreElement(elementKey, elementId));
        };
    };

    public static markUserMessageAsViewed(elementId: string, headers: any) {
        return async (dispatcher: (prop: any) => void) => {
            await axiosInstance.put(`${JavaApiEndpoints.USER_MESSAGES}/${elementId}`, null, { headers });
            dispatcher(ReduxFormsActions.markUserMessageAsViewed(elementId));
        };
    };

    public static addNewProjectData(projectModel: any, imagesStoreProperties: any, headers: any) {
        return async (dispatcher: (prop: any) => void) => {
            await axiosInstance.post(`${JavaApiEndpoints.PROJECTS}`, projectModel, { headers })
                .then(response => response)
                .then(data => {
                    dispatcher(ReduxAPIActions.addReduxStoreElement(data.data, ReduxAPIstateKeys.PROJECTS));
                    ImagesManipulator.convertAndUploadProjectImage(
                        data.data.id, data.data.projectPath, imagesStoreProperties, headers
                    ).then(() => {
                        dispatcher(ReduxProjFormActions.setServerResponseMessage(
                            "Successfully added new project instance.", false));
                    });
                }, () => {
                    dispatcher(ReduxProjFormActions.setServerResponseMessage(
                        "Unexpected error while adding new project.", true));
                });
        };
    };

    public static updateExistingProjectData(existingProjectId: string, imagesStoreProperties: any, projectModel: any, headers: any) {
        return async (dispatcher: (prop: any) => void) => {
            await axiosInstance.put(`${JavaApiEndpoints.PROJECTS}/${existingProjectId}`, projectModel, { headers })
                .then(response => response)
                .then(data => {
                    dispatcher(ReduxAPIActions.updateSelectedProject(existingProjectId, data.data));
                    ImagesManipulator.convertAndUploadProjectImage(
                        data.data.id, data.data.projectPath, imagesStoreProperties, headers
                    ).then(() => {
                        dispatcher(ReduxProjFormActions.setServerResponseMessage(
                            "Successfully updating existing project instance.", false));
                    });
                }, () => {
                    dispatcher(ReduxProjFormActions.setServerResponseMessage(
                        "Unexpected error while updating existing project.", true));
                });
        };
    }

    public static uploadImagesToTemporaryStore(projectId: string) {
        return async (dispatcher: (prop: any) => void) => {
            const { data } = await axiosInstance.get(`${JavaApiEndpoints.PHOTOS}/${projectId}`);
            for (const image of data.projectImages) {
                const response = await fetch(image.url);
                const imageBlob = await response.blob();
                const imageObj = new Image();
                const objectUrl = window.URL.createObjectURL(imageBlob);
                imageObj.onload = () => {
                    let currentImageMode: ImageUploadMode;
                    if (image.name.toLowerCase().includes('main')) {
                        currentImageMode = ImageUploadMode.MAIN_IMAGE;
                    } else if (image.name.toLowerCase().includes('paralax')) {
                        currentImageMode = ImageUploadMode.BACKGROUND_IMAGE;
                    } else {
                        currentImageMode = ImageUploadMode.ASSEMBLY_IMAGE;
                    }
                    dispatcher(ReduxAPIActions.addNewImageUriToSelectImageModeArray(currentImageMode, objectUrl));
                };
                imageObj.src = objectUrl;
            }
        };
    }
}