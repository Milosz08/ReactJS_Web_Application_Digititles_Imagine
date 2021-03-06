/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: AppRoutes.tsx
 * Last modified: 21/02/2022, 20:46
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
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { appRouting } from '../static/appRouting';

import { AllCookies } from '../context/cookies-context/allCookiesConfig';
import { AllCookiesContext, AllCookiesTypes } from '../context/cookies-context/AllCookiesProvider';

import { RootState } from '../redux/store';
import { ReduxAPIActions } from '../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../redux/redux-api-thunk/initialState';


const AppRoutes: React.FC = (): JSX.Element => {

    const { sessionInfo }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { cookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);
    
    const routing = useRoutes(appRouting(sessionInfo.ifLogged));
    const dispatcher = useDispatch();

    useEffect(() => {
        const { CMS_SESSION, BEARER_TOKEN } = AllCookies;
        if (Boolean(cookie![CMS_SESSION]) && Boolean(cookie![BEARER_TOKEN])) {
            dispatcher(ReduxAPIActions.changeSessionInfo(true, cookie![CMS_SESSION], cookie![BEARER_TOKEN]))
        }
    }, [ cookie, dispatcher ]);
    
    return (
        <>
            {routing}
        </>
    );
};

export default AppRoutes;