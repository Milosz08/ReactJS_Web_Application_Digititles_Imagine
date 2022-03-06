/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GsapAnimations.ts
 * Last modified: 23/02/2022, 17:44
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

import { MutableRefObject } from 'react';
import { Expo, gsap } from 'gsap';

import { AnimationDirections, AnimationStages, AnimationVisibility } from '../redux/redux-dom-manipulate/types';

const { TOP, BOTTOM, LEFT } = AnimationDirections;
const { FLEX } = AnimationVisibility;
const { SHOW, HIDE } = AnimationStages;

interface gsapBasicObjectProps {
    dir?: AnimationDirections;
    interpos?: number;
    visible: AnimationStages;
    visibleType?: AnimationVisibility;
    delay?: number;
    ease?: gsap.EaseFunction;
    duration?: number;
}

export class Gsap {

    public static gsapBasicAnimations(
        ref: MutableRefObject<any>,
        { dir, interpos, visible, visibleType, delay, ease, duration }: gsapBasicObjectProps
    ) {
        const positionXY = visible === HIDE ? dir === TOP || dir === LEFT ? `${-interpos!}px` : `${interpos}px` : 0;
        gsap.to(ref.current, {
            [dir === TOP || dir === BOTTOM ? 'y' : 'x']: positionXY,
            autoAlpha: visible === SHOW ? 1 : 0,
            delay: delay || 0,
            duration: duration || .3,
            display: visible === SHOW ? visibleType === FLEX ? 'flex' : 'block' : 'none',
            ease: ease || Expo.easeOut,
        });
    };

    public static scrollIntoContext(selector: HTMLElement): void {
        selector.scrollIntoView({
            behavior: 'smooth', block: 'start', inline: 'nearest',
        });
    };

    public static getHeightFromTopToCurrentElement(childrens: any, clickId: string): number {
        let pxFromTop = 0;
        for (const element of childrens) {
            pxFromTop += element.offsetHeight;
            if (element.dataset.id === clickId) {
                return pxFromTop;
            }
        }
        return pxFromTop;
    };

}