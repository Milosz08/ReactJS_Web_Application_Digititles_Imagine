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
import { ReduxAPIActions } from './actions';

import { AllFormsTypes } from '../redux-subreducers/redux-forms/types';
import { ReduxFormsActions } from '../redux-subreducers/redux-forms/actions';


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
        }
    };

    public static markUserMessageAsViewed(elementId: string, headers: any) {
        return async (dispatcher: (prop: any) => void) => {
            await axiosInstance.put(`${JavaApiEndpoints.USER_MESSAGES}/${elementId}`, null, { headers });
            dispatcher(ReduxFormsActions.markUserMessageAsViewed(elementId));
        }
    };

}