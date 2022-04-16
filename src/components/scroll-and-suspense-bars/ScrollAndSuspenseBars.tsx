/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ScrollAndSuspenseBars.tsx
 * Last modified: 06/03/2022, 01:23
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
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RoutingPaths } from '../../static/appRouting';

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

import { RightScrollBarContainer, SuspenseBarContainer } from './ScrollAndSuspenseBars.styles';


const ScrollAndSuspenseBars: React.FC = (): JSX.Element => {

    const { scrollDisabledPx }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const [ barActive, setBarActive ] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes(RoutingPaths.CMS__ADMIN_PANEL)) {
            setBarActive(!Object.keys(status).every(loading => !status[loading]));
        } else {
            setBarActive(!(!status.loadingImages && !status.loadingProjects));
        }
    }, [ pathname, status ]);

    return (
        <>
            <RightScrollBarContainer
                $barWidth = {scrollDisabledPx}
            />
            <SuspenseBarContainer
                $barActive = {barActive}
            />
        </>
    );
};

export default ScrollAndSuspenseBars;