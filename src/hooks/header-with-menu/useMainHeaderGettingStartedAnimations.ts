/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useMainHeaderGettingStartedAnimations.ts
 * Last modified: 23/02/2022, 18:58
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
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import useDidMount from '../reusable/useDidMount';
import { Gsap } from '../../helper-primitives/GsapAnimations';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { AnimationDirections, AnimationStages, AnimationVisibility } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook reponsible for managing animations of 'getting started' link in main header. Include handle animations
 * on load, on scroll event, on menu open/close and change URL patch listener.
 *
 * @return { React.MutableRefObject<any> } - referential object.
 */
const useMainHeaderGettingStartedAnimations = (): React.MutableRefObject<any> => {

    const { ifMenuOpen, whileChangingRoutes }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const { SHOW, HIDE } = AnimationStages;
    const { BOTTOM } = AnimationDirections;
    const { FLEX } = AnimationVisibility;

    const isMount = useDidMount();
    const headerGettingRef = useRef(null);
    const { pathname } = useLocation();

    // litening change route and disable visibility on patch '/'
    useLayoutEffect(() => {
        if (!isMount) {
            window.scrollTo(0, 0);
            Gsap.gsapBasicAnimations(headerGettingRef, {
                dir: BOTTOM,
                visibleType: FLEX,
                visible: pathname === '/' ? SHOW : HIDE,
                interpos: 10,
                duration: .6,
                delay: .1,
            });
        }
    }, [ pathname, headerGettingRef ]);

    // on menu open/closed animations
    useLayoutEffect(() => {
        if (!isMount && !whileChangingRoutes) {
            Gsap.gsapBasicAnimations(headerGettingRef, {
                dir: BOTTOM,
                interpos: 10,
                visible: ifMenuOpen ? HIDE : SHOW,
                duration: .6,
                delay: ifMenuOpen ? 0 : .5,
            });
        }
    }, [ ifMenuOpen ]);

    // load animation on first component mount
    useEffect(() => {
        if (isMount && pathname === '/') {
            Gsap.gsapBasicAnimations(headerGettingRef, { dir: BOTTOM, visible: SHOW, visibleType: FLEX, delay: .4 });
        }
    }, [ isMount ]);

    return headerGettingRef;
};

export default useMainHeaderGettingStartedAnimations;