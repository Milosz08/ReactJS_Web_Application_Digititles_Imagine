/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: InvokeOnMount.tsx
 * Last modified: 22/02/2022, 15:31
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
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RoutingPaths } from '../static/appRouting';
import GlobalStylesInjection from '../styles/global.styles';
import { AllCookiesContext, AllCookiesTypes } from '../context/cookies-context/AllCookiesProvider';

import useSetScrollPosition from '../hooks/reusable/useSetScrollPosition';
import useChangeStickyOnScroll from '../hooks/navigation/useChangeStickyOnScroll';
import useChangeBrowserSizeListener from '../hooks/reusable/useChangeBrowserSizeListener';

import { RootState } from '../redux/store';
import { AllCookies } from '../context/cookies-context/allCookiesConfig';
import { InitStateDOMtypes } from '../redux/redux-dom-manipulate/initialState';


const InvokeOnMount: React.FC = (): JSX.Element => {

    const { cookiesNotifContainerHeight }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { cookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);

    const { pathname } = useLocation();

    useSetScrollPosition();
    useChangeStickyOnScroll(600);
    useChangeBrowserSizeListener();

    return (
        <GlobalStylesInjection
            $ifIsGettingStarted = {pathname.includes(RoutingPaths.GETTING_STARTED)}
            $ifCookieNotifIsActive = {Boolean(cookie![AllCookies.COOKIE_POPUP])}
            $marginFromTop = {cookiesNotifContainerHeight}
        />
    );
};

export default InvokeOnMount;