/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: LoadCmsData.tsx
 * Last modified: 02/04/2022, 13:32
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
import { useDispatch } from 'react-redux';

import useDidMount from '../hooks/reusable/useDidMount';

import { ReduxAPIThunk } from '../redux/redux-api-thunk/thunk';
import { ReduxAPIstateKeys } from '../redux/redux-api-thunk/types';
import { JavaApiEndpoints } from '../redux/redux-api-thunk/request';


const LoadCmsData: React.FC = (): null => {

    const dispatcher = useDispatch();
    const isMount = useDidMount();

    useEffect(() => {
        const { MESSAGE_FORMS, LOADING_MESSAGE_FORMS, REGISTRATION_FORMS, LOADING_REGISTRATION_FORMS } = ReduxAPIstateKeys;
        const { REGISTRATION, USER_MESSAGES } = JavaApiEndpoints;
        if (isMount) {
            dispatcher(ReduxAPIThunk.getAllElements(REGISTRATION, REGISTRATION_FORMS, LOADING_REGISTRATION_FORMS));
            dispatcher(ReduxAPIThunk.getAllElements(USER_MESSAGES, MESSAGE_FORMS, LOADING_MESSAGE_FORMS));
        }
    }, [ isMount, dispatcher ]);

    return null;
};

export default LoadCmsData;