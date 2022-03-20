/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useCookiesNotificationSetDynamicHeight.ts
 * Last modified: 18/03/2022, 17:46
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
import { useContext, useLayoutEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gsap } from 'gsap';

import { AllCookies } from '../../context/cookies-context/allCookiesConfig';
import { AllCookiesContext, AllCookiesTypes } from '../../context/cookies-context/AllCookiesProvider';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

/**
 * Custom hook responsible for dynamically setting margin from top of root element based dynamic height
 * of cookies notification element.
 *
 * @return { [ React.MutableRefObject<any>, boolean ] } - reference cookies notification container height and menu
 *         open indicator flag.
 */
const useCookiesNotificationSetDynamicHeight = (): [ React.MutableRefObject<any>, boolean ] => {

    const { browserX, ifMenuOpen }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { cookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);

    const notifRef = useRef<HTMLDivElement>(null);
    const dispatcher = useDispatch();

    // on every load or change browser width size
    useLayoutEffect(() => {
        if (notifRef && browserX > 1030) {
            gsap.to(notifRef.current, {
                y: !Boolean(cookie![AllCookies.COOKIE_POPUP]) ? 0 : -notifRef.current!.clientHeight - 2, duration: 0
            });
            dispatcher(ReduxDOMActions.changeFirstLevelElement(
                ReduxDOMstateKeys.COOKIES_NOTIF_CONTAINER_HEIGHT, !Boolean(cookie![AllCookies.COOKIE_POPUP]) ? notifRef.current!.offsetHeight : 0
            ));
        }
    }, [ browserX, cookie, dispatcher ]);

    return [ notifRef, ifMenuOpen ];
};

export default useCookiesNotificationSetDynamicHeight;