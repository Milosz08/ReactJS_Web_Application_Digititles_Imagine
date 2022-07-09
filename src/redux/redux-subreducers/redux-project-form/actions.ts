/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: actions.ts
 * Last modified: 16/04/2022, 14:35
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

import {
    DiscretteProjectSections, ProjectFieldsKeys, ProjectFormEditableMode, ReduxProjFormReducerTypes
} from './types';


interface ReturnedToReducer {
    type: ReduxProjFormReducerTypes | string;
    payload?: {
        [key: string]: any;
    };
}

export class ReduxProjFormActions {

    public static insertProjectFormElement = (
        elementKey: ProjectFieldsKeys, value: any, mode: ProjectFormEditableMode = ProjectFormEditableMode.NORMAL
    ): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.INSERT_PROJECT_FORM_ELEMENT,
        payload: {
            elementKey, value, mode,
        }
    });

    public static insertExistingProjectDataToForm = (projectId: string): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.INSERT_EXISTING_PROJECT_DATA_TO_FORM,
        payload: {
            projectId,
        }
    });

    public static clearAllProjectFormElements = (): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.CLEAR_ALL_PROJECT_FORM_ELEMENTS,
    });

    public static changeProjectArrayValue = (arrayType: DiscretteProjectSections, index: number, value: string)
        : ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.CHANGE_PROJECT_ARRAY_CONTENT_VALUE,
        payload: {
            arrayType, index, value,
        }
    });

    public static changeProjectSingleColorValue = (colorValueKey: string, value: string): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_SINGLE_COLOR_VALUE,
        payload: {
            colorValueKey, value,
        }
    });

    public static addProjectArrayElement = (arrayType: DiscretteProjectSections, insertValue: any = '')
        : ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.ADD_PROJECT_ARRAY_ELEMENT,
        payload: {
            arrayType, insertValue,
        }
    });

    public static removeProjectArrayElement = (arrayType: DiscretteProjectSections, index: number)
        : ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.REMOVE_PROJECT_ARRAY_ELEMENT,
        payload: {
            arrayType, index,
        }
    });

    public static changeProjectFormSoftUsedFor = (index: number, value: string): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_SOFT_USED_FOR,
        payload: {
            index, value,
        }
    });

    public static changleProjectFormSoftName = (index: number, value: string, short: string): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_SOFT_NAME,
        payload: {
            index, value, short
        }
    });

    public static changeProjecFormIfActiveCustomSoft = (index: number, value: boolean): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_IF_ACTIVE_CUSTOM_SOFT,
        payload: {
            index, value,
        }
    });

    public static setServerResponseMessage = (message: string, ifError: boolean): ReturnedToReducer => ({
        type: ReduxProjFormReducerTypes.SETTING_SERVER_RESPONSE,
        payload: {
            message, ifError,
        }
    });

}