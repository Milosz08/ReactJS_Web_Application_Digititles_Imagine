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

/**
 * Redux reducer for providing API CRUD state management.
 */
const reduxReducerAPI = (state = InitStateAPI, action: any): InitStateAPItypes => {
    switch (Utils.normalised(action.type)) {

        case ReduxAPIreducerTypes.ADD_ELEMENT_FROM_DB: {
            const { elementToSend, elementType } = action.payload;
            return {
                ...state, status: { ...state.status, loading: false },
                [elementType]: [ ...state[elementType], elementToSend ]
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
            return { ...state, [elementType]: updateState };
        }

        case ReduxAPIreducerTypes.DELETE_ELEMENT_FROM_DB: {
            const { elementType, elementId } = action.payload;
            const excludedItem = state[elementType].filter((el: typeof elementType) => elementId !== el.id);
            return { ...state, [elementType]: excludedItem };
        }

        case ReduxAPIreducerTypes.SET_REQUEST_LOADING: {
            return { ...state, status: { ...state.status, loading: true } };
        }

        case ReduxAPIreducerTypes.SET_REQUEST_ERROR: {
            const { message } = action.payload;
            return { ...state, status: { ...state.status, error: message } };
        }

        default: {
            return state;
        }
    }
};

export default reduxReducerAPI;