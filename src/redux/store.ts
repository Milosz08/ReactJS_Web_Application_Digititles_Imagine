/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: store.ts
 * Last modified: 22/02/2022, 14:57
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

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Utils from './utils';

import reduxReducerDOM from './redux-dom-manipulate/reducer';
import reduxReducerAPI from './redux-api-thunk/reducer';
import reduxReducerForms from './redux-subreducers/redux-forms/reducer';
import reduxReducerProjForm from './redux-subreducers/redux-project-form/reducer';


const reduxGlobalReducer = Utils.reduceReducers(
    reduxReducerAPI,
    reduxReducerForms,
    reduxReducerProjForm,
);

const rootReducers = combineReducers({
    reduxReducerDOM,
    reduxGlobalReducer,
});

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducers>;

export default store;