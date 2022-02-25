/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangeVisibilityOnScroll.ts
 * Last modified: 23/02/2022, 20:43
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

import { Expo, gsap, Power0 } from 'gsap';

import useMultipleRefs from '../reusable/useMultipleRefs';
import { Gsap } from '../../helper-primitives/GsapAnimations';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { AnimationStages, AnimationVisibility } from '../../redux/redux-dom-manipulate/types';


interface ShowHideProps {
    animActivate: number;
    elements?: number;
    visibleType?: AnimationVisibility;
    ifNonHardHide?: boolean;
}

/**
 * Custom hook responsible for show/hide DOM element(s) based current scroll position and element sizes.
 *
 * @param animActivate { number } - element height.
 * @param elements { number? } - count of referential objects to create (default: 1).
 * @param visibleType { AnimationVisibility } - visibility DOM element by CSS type (flex/block).
 * @param ifNonHardHide { boolean } - if also hook has set display on none (default false).
 * @return { React.MutableRefObject<any>[] } - referential objects to inject in JSX elements.
 */
const useChangeVisibilityOnScroll = ({
    animActivate, elements, visibleType, ifNonHardHide
}: ShowHideProps): React.MutableRefObject<any>[] => {

    const { currScrollPos }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { elRefs, getCurrents } = useMultipleRefs(elements || 1);

    const { HIDE, SHOW } = AnimationStages;
    const { BLOCK } = AnimationVisibility;

    useLayoutEffect((): void => {
        const opacityValue: number = 1 - document.documentElement.scrollTop / animActivate;
        const autoAlpha: number = opacityValue <= 0 || opacityValue === -0 ? 0 : opacityValue;
        if(ifNonHardHide) {
            gsap.to(getCurrents(), { autoAlpha, duration: .3 });
        } else {
            gsap.to(getCurrents(), {
                autoAlpha, display: autoAlpha === 0 ? 'none' : visibleType === BLOCK ? 'block' : 'flex', duration: .3,
            });
        }
    }, [ currScrollPos ]);

    return elRefs;
};

export default useChangeVisibilityOnScroll;