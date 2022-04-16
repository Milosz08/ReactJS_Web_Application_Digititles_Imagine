/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: LoadAllAPIData.tsx
 * Last modified: 02/03/2022, 00:24
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

import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RoutingPaths } from '../static/appRouting';
import useDidMount from '../hooks/reusable/useDidMount';
import useDisableScroll from '../hooks/reusable/useDisableScroll';

import { RootState } from '../redux/store';
import { ReduxAPIThunk } from '../redux/redux-api-thunk/thunk';
import { ReduxAPIstateKeys } from '../redux/redux-api-thunk/types';
import { JavaApiEndpoints } from '../redux/redux-api-thunk/request';
import { InitStateAPItypes } from '../redux/redux-api-thunk/initialState';


/**
 * Custom React component responsible for all GET request operations (getting from database
 * on initial load application).
 */
const LoadAllAPIData: React.FC = (): null => {

    const { status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    
    const [ blockScroll, allowScroll ] = useDisableScroll();
    const dispatcher = useDispatch();
    const { pathname } = useLocation();
    const isMount = useDidMount();

    useEffect(() => {
        if (pathname.includes(RoutingPaths.CMS__ADMIN_PANEL)) {
            if (!Object.keys(status).every(loading => !status[loading])) {
                blockScroll();
            } else {
                allowScroll();
            }
        } else {
            if (!(!status.loadingImages && !status.loadingProjects)) {
                blockScroll();
            } else {
                allowScroll();
            }
        }
    }, [ allowScroll, blockScroll, pathname, status ]);

    useEffect(() => {
        const { PROJECTS, IMAGES, LOADING_PROJECTS, LOADING_IMAGES } = ReduxAPIstateKeys;
        if (isMount) {
            dispatcher(ReduxAPIThunk.getAllElements(JavaApiEndpoints.PROJECTS, PROJECTS, LOADING_PROJECTS));
            dispatcher(ReduxAPIThunk.getAllElements(JavaApiEndpoints.PHOTOS, IMAGES, LOADING_IMAGES));
        }
    }, [ isMount, dispatcher ]);

    return null;
};

export default LoadAllAPIData;