/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useAnimationWaterfallOnClick.ts
 * Last modified: 13/03/2022, 17:08
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
import { useContext, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gsap } from 'gsap';

import useMultipleRefs from '../reusable/useMultipleRefs';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { GettingStartedNavElms, ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

interface HookReturned {
    elRefs: React.MutableRefObject<any>[];
    handleClickWaterfallAnimation: () => void;
}

/**
 * Custom hook responsible for setting waterfall animation on click head element. Also generate
 * sequence animation on initial mount component.
 *
 * @return { [ React.MutableRefObject<any>[], () => void ] } - first: referential objects array, second: on click
 *         handler function.
 */
const useAnimationWaterfallOnClick = (): HookReturned => {

    const { browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { service } = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);

    const { elRefs, getCurrents } = useMultipleRefs(3);
    const dispatcher = useDispatch();

    const sequence = gsap.timeline();
    const mountSequence = gsap.timeline({ delay: .5 });

    const textContentAnimationInvoker = (): void => {
        dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.HEADER_LIGHT, true));
    };

    const textNavbarAnimationInvoker = (): void => {
        dispatcher(ReduxDOMActions.changeFirstLevelElement(
            ReduxDOMstateKeys.GETTING_STARTED_ACTIVE_SECTION, GettingStartedNavElms.SERVICE
        ));
    };

    const handleClickWaterfallAnimation = (): void => {
        const [ textNavbar, colorNavbar, textContent ] = getCurrents();
        const allServicesRefs = [service!.header.current].concat([...service!.childrens.current.children]);
        if (textNavbar && colorNavbar && textNavbar && browserX > 1030) {
            dispatcher(ReduxDOMActions.activeElementIntoArray(GettingStartedNavElms.SERVICE));
            sequence
                .to(colorNavbar.children, { display: 'none' })
                .to(colorNavbar, { width: 'calc(100% - 15vh)' })
                .to(textContent, { autoAlpha: 0, duration: .2, onComplete: textContentAnimationInvoker }, '<')
                .to(colorNavbar, { left: 'calc(100% - 300px)' }, .7)
                .to(textNavbar, { x: 0, autoAlpha: 1, onComplete: textNavbarAnimationInvoker })
                .to(allServicesRefs, { y: 0, autoAlpha: 1, stagger: .2 })
        }
    };

    // invoke on mount component
    useLayoutEffect(() => {
        const [ , colorNavbar, textContent ] = getCurrents();
        if (colorNavbar && textContent && browserX > 1030) {;
            mountSequence
                .to(colorNavbar, { x: 0, autoAlpha: 1 })
                .to(textContent.children, { y: 0, autoAlpha: 1, stagger: .2 });
        }
    }, [ browserX, elRefs, getCurrents, mountSequence ]);

    useEffect(() => {
        return () => {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.HEADER_LIGHT, false));
        }
    }, [ dispatcher ]);

    return { elRefs, handleClickWaterfallAnimation };
};

export default useAnimationWaterfallOnClick;