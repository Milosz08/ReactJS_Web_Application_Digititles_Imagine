/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangeVisibilityBasedMark.ts
 * Last modified: 23/02/2022, 20:55
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
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import { gsap } from 'gsap';

import useMultipleRefs from '../reusable/useMultipleRefs';
import { Gsap } from '../../helper-primitives/GsapAnimations';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { AnimationStages, AnimationVisibility } from '../../redux/redux-dom-manipulate/types';


interface ShowHideProps {
    reversed?: boolean;
    animActivate: number;
    elements?: number;
    visibleType?: AnimationVisibility;
    disableMediaQueryValue?: number;
}

/**
 * Custom hook reponsible for show/hide element based scroll mark trigger.
 *
 * @param reversed { boolean? } - flag decided, if on activation value animation is active or disactive (default: false).
 * @param animActivate { number } - mark (scroll from top) position decided to execute animation.
 * @param elements { number? } - count of referential objects to create (default: 1).
 * @param visibleType { AnimationVisibility? } - visibility DOM element by CSS type (flex/block).
 * @param disableMediaQueryValue { number? } - disable animation on specific browser size.
 * @return { React.MutableRefObject<any>[] } - referential objects to inject in JSX elements.
 */
const useChangeVisibilityBasedMark = ({
    reversed, animActivate, elements, visibleType, disableMediaQueryValue
}: ShowHideProps): React.MutableRefObject<any>[] => {

    const { currScrollPos, browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { elRefs } = useMultipleRefs(elements || 1);

    const { HIDE, SHOW } = AnimationStages;

    useLayoutEffect((): void => {
        if (browserX > disableMediaQueryValue!) {
            if (currScrollPos > animActivate) {
                elRefs.forEach(ref => {
                    Gsap.gsapBasicAnimations(ref, { visibleType, visible: reversed ? SHOW : HIDE, duration: .8 });
                });
            } else {
                elRefs.forEach(ref => {
                    Gsap.gsapBasicAnimations(ref, { visibleType, visible: reversed ? HIDE : SHOW, duration: .8 });
                });
            }
        }
    }, [ currScrollPos, browserX ]);

    return elRefs;

};

export default useChangeVisibilityBasedMark;