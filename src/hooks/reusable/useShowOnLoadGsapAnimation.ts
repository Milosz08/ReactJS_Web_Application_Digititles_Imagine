/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useShowOnLoadGsapAnimation.ts
 * Last modified: 26/02/2022, 14:35
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
import { Expo, gsap } from 'gsap';

import useMultipleRefs from './useMultipleRefs';
import { AnimationDirections } from '../../redux/redux-dom-manipulate/types';


interface AnimProps {
    posPx: number;
    moveFrom: AnimationDirections;
    initDelay?: number;
    stagger?: number;
}

/**
 * Custom hook reponsible for implement show animation on load. Hook can animate element in X and Y axios with custom
 * displacement (in px). Also prepared for delay every single element in multiple elements array (stagger property).
 *
 * @param posPx { number } - element displacement value (in px).
 * @param moveFrom { AnimationDirections } - displacelment direction (TOP/RIGHT/BOTTOM/LEFT).
 * @param initDelay { number? } - delay after build DOM tree (optional, by default start immediately).
 * @param stagger { number? } - delay between multiple array elements (optional, by default no delay).
 * @param countOfElms { number? } - count of elements to animate (optional, by default is one element).
 * @return { React.MutableRefObject<any>[] } - referential animate objects array.
 */
const useShowOnLoadGsapAnimation = ({ posPx, moveFrom, initDelay, stagger }: AnimProps, countOfElms?: number)
    : React.MutableRefObject<any>[] => {
    
    const { elRefs, getCurrents } = useMultipleRefs(countOfElms || 1);

    useLayoutEffect(() => {
        const { TOP, BOTTOM, LEFT } = AnimationDirections;
        const axios = moveFrom === TOP || moveFrom === BOTTOM ? 'y' : 'x';
        gsap.from(getCurrents(), {
            [axios]: moveFrom === TOP || moveFrom === LEFT ? -posPx : posPx,
            autoAlpha: 0, ease: Expo.easeOut, duration: 1, delay: initDelay || 0, stagger: stagger || 0
        });
    }, [ getCurrents, initDelay, moveFrom, posPx, stagger ]);

    return elRefs;
};

export default useShowOnLoadGsapAnimation;