/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useMainHeaderTitleAnimations.ts
 * Last modified: 23/02/2022, 18:19
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
import { AnimationDirections, AnimationStages } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook responsible for managing header title animations on all subpages. Include manage visibility
 * on load, on scroll event and while user open/closed menu.
 *
 * @return { [ React.MutableRefObject<any>, boolean ] } - first is the referential object, second is the menu open flag.
 */
const useMainHeaderTitleAnimations = (): [ React.MutableRefObject<any>, boolean ] => {

    const {
        ifMenuOpen, currScrollPos, whileChangingRoutes
    }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const { SHOW, HIDE } = AnimationStages;
    const { LEFT, RIGHT } = AnimationDirections;

    const isMount = useDidMount();
    const headerTitleRef = useRef();
    const { pathname } = useLocation();

    // litening change route and disable visibility on patch '/getting-started'
    useLayoutEffect(() => {
        if (!isMount) {
            window.scrollTo(0, 0);
            Gsap.gsapBasicAnimations(headerTitleRef, {
                dir: RIGHT,
                interpos: 30,
                visible: pathname === '/getting-started' ? HIDE : SHOW,
                duration: 1,
            });
        }
    }, [ pathname, headerTitleRef ]);

    // change visibility on scroll event
    useLayoutEffect(() => {
        if (!isMount && pathname !== '/getting-started') {
            Gsap.gsapBasicAnimations(headerTitleRef, {
                dir: LEFT,
                interpos: 15,
                visible: currScrollPos > 100 ? HIDE : SHOW,
                duration: .5,
            });
        }
    }, [ currScrollPos ]);

    // on menu open/closed animations
    useLayoutEffect(() => {
        if (!isMount && !whileChangingRoutes) {
            if (ifMenuOpen) {
                Gsap.gsapBasicAnimations(headerTitleRef, { dir: LEFT, interpos: 10, visible: HIDE });
            } else if (currScrollPos <= 100) {
                Gsap.gsapBasicAnimations(headerTitleRef, { dir: LEFT, visible: SHOW, delay: .4 });
            }
        }
    }, [ ifMenuOpen ]);

    // load animation on first component mount
    useEffect(() => {
        if (isMount && pathname !== '/getting-started') {
            Gsap.gsapBasicAnimations(headerTitleRef, { dir: LEFT, visible: SHOW, delay: .6, duration: 1 });
        }
    }, [ isMount ]);

    return [ headerTitleRef, ifMenuOpen ];
};

export default useMainHeaderTitleAnimations;