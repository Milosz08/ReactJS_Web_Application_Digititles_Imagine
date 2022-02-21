/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NonProtectedRoute.tsx
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
import { Route, Routes, Navigate } from 'react-router-dom';

import { BasicAppRouting } from '../static/routingData';
import TitleInjectionHOC from '../high-order-components/TitleInjectionHOC';

const NonProtectedRoute: React.FC = (): JSX.Element => {

    const generateRouterStructure = BasicAppRouting.map(({ path, ariaLabel, component }) => (
        <Route
            path = {path}
            element = {<TitleInjectionHOC title = {ariaLabel || ''} Component = {component}/>}
        />
    ));

    return (
        <Routes>
            {generateRouterStructure}
            <Route path = "*" element = {<Navigate to = "/"/>}/>
        </Routes>
    );
};

export default NonProtectedRoute;