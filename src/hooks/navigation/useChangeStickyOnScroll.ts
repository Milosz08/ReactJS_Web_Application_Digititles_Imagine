/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangeStickyOnScroll.ts
 * Last modified: 23/02/2022, 21:33
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RoutingPaths } from '../../static/appRouting';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

/**
 * Custom hook reponsible for changing CSS position state on scrolling. When scroll position is outer of
 * range (based props), then element is fluid.
 *
 * @param footerHeight { number } - height of footer (in px).
 */
const useChangeStickyOnScroll = (footerHeight: number): null => {

    const state: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { currScrollPos, currScrollFromBottom, totalHeight, cookiesNotifContainerHeight } = state;

    const dispatcher = useDispatch();
    const { pathname } = useLocation();

    const extraBlocks = pathname.includes('/projects/project') || pathname === RoutingPaths.SERVICES;

    useEffect(() => {
        dispatcher(ReduxDOMActions.setStaticContent(
            extraBlocks
                ? !(currScrollPos >= totalHeight + cookiesNotifContainerHeight)
                : !(currScrollFromBottom <= footerHeight && currScrollPos !== 0),
            pathname !== RoutingPaths.START
                ? !(currScrollFromBottom <= footerHeight + 220 && currScrollPos !== 0)
                : !(currScrollFromBottom <= footerHeight && currScrollPos !== 0)
        ));
    }, [ currScrollFromBottom, dispatcher, footerHeight ]);

    return null;
};

export default useChangeStickyOnScroll;