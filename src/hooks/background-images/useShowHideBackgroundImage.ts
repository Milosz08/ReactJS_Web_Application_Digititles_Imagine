/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useShowHideBackgroundImage.ts
 * Last modified: 25/02/2022, 21:46
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
import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { gsap, Expo } from 'gsap';

import { RootState } from '../../redux/store';
import useMultipleRefs from '../reusable/useMultipleRefs';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import useDidMount from '../reusable/useDidMount';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { useLocation } from 'react-router-dom';


interface HookProps {
    invokePx: number;
    ifShowOnLoad?: boolean;
    ifSingleProject?: boolean;
    elements?: number;
}

/**
 * Custom hook responsible for show/hide background image with background triangle element. It has 2 states: first,
 * show elements on load and the second show elements only on scroll event.
 *
 * @param invokePx { number } - trigerred animation (only for scroll).
 * @param ifShowOnLoad { boolean? } - if true, show elements on load (optional, default: false).
 * @param ifSingleProject { boolean? } - flag decided, if path is relative to single project page.
 * @param elements { number? } - count of referential objects (optional, default: 2).
 * @return { React.MutableRefObject<any>[] } - referential objects array.
 */
const useShowHideBackgroundImage = ({ invokePx, ifShowOnLoad, ifSingleProject, elements }: HookProps): React.MutableRefObject<any>[] => {

    const { currScrollPos, browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const [ toggleAnim, setToggleAnim ] = useState<boolean>(true);
    const { elRefs, getCurrents } = useMultipleRefs(elements || 2);
    const { pathname } = useLocation();
    
    // show/hide on scroll trigger
    useLayoutEffect(() => {
        if (!ifShowOnLoad && browserX > 1030) {
            if (currScrollPos > invokePx && toggleAnim) {
                gsap.to(getCurrents(), { x: 0, duration: .6, ease: Expo.easeInOut, stagger: .2 });
                setToggleAnim(false);
            } else if (currScrollPos < invokePx && !toggleAnim) {
                const reverseCurrents = getCurrents().reverse();
                gsap.to(reverseCurrents, { x: '100%', duration: .6, ease: Expo.easeInOut, stagger: .2 });
                setToggleAnim(true);
            }
        }
    }, [ browserX, currScrollPos, getCurrents, ifShowOnLoad, invokePx, toggleAnim ]);

    // show/hide when page would be load
    useLayoutEffect(() => {
        if (!status.loadingProjects || !ifSingleProject) {
            if (ifShowOnLoad && browserX > 1030) {
                gsap.to(getCurrents(), {
                    x: 0, duration: .6, ease: Expo.easeInOut, delay: ifSingleProject ? 1 : .5
                });
            }
        }
    }, [ browserX, getCurrents, ifShowOnLoad, ifSingleProject, pathname, status.loadingProjects ]);

    return elRefs;
};

export default useShowHideBackgroundImage;