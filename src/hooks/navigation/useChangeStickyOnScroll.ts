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

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';

/**
 * Custom hook reponsible for changing CSS position state on scrolling. When scroll position is outer of
 * range (based props), then element is fluid.
 *
 * @param footerHeight { number } - height of footer (in px).
 */
const useChangeStickyOnScroll = (footerHeight: number): null => {

    const { currScrollFromBottom }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const dispatcher = useDispatch();

    useEffect((): void => {
        if (currScrollFromBottom <= footerHeight) {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.IF_FIXED, false));
        } else {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.IF_FIXED, true));
        }
    }, [ currScrollFromBottom, dispatcher, footerHeight ]);

    return null;
};

export default useChangeStickyOnScroll;