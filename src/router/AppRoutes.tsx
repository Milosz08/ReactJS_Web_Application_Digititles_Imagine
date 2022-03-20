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
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

import { appRouting } from '../static/appRouting';

import { RootState } from '../redux/store';
import { InitStateAPItypes } from '../redux/redux-api-thunk/initialState';


const AppRoutes: React.FC = (): JSX.Element => {

    const { sessionInfo }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const routing = useRoutes(appRouting(sessionInfo.ifLogged));

    return (
        <>
            {routing}
        </>
    );
};

export default AppRoutes;