/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useSingleRowGroupAnimation.ts
 * Last modified: 25/02/2022, 02:59
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

import { gsap } from 'gsap';

import useMultipleRefs from '../reusable/useMultipleRefs';
import { MainPageAnimTitlesObject, Position } from '../../static/mainPageAnimTitlesObject';


interface HookProps {
    groupPos: Position;
    gsapTimeline: gsap.core.Timeline;
}

enum PropType { FROM, TO }

/**
 * Custom hook responsible for generating GSAP timeline for all tree rows animation on main page
 * fancy animation title JSX element.
 *
 * @param groupPos { Position } - element position (TOP/CENTER/BOTTOM).
 * @param gsapTimeline { gsap.core.Timeline } - single prepared GSAP timeline object.
 * @return { [ React.MutableRefObject<any>[], string[] ] } - first: all rows references, all rows content string arrays.
 */
const useSingleRowGroupAnimation = ({ groupPos, gsapTimeline }: HookProps): [ React.MutableRefObject<any>[], string[] ] => {

    const currentElement = MainPageAnimTitlesObject.find(title => title.ariaLabel === groupPos);
    const { elRefs, getCurrents } = useMultipleRefs(currentElement!.content.length);
    
    useLayoutEffect((): void => {
        if (elRefs.length === currentElement!.content.length) {
            const [ stage1, stage2, stage3 ] = getCurrents();
            gsapTimeline
                .from(stage1.children, createPropertiesObject(PropType.FROM, true))
                .to(stage1.children, createPropertiesObject(PropType.TO))
                .from(stage2.children, createPropertiesObject(PropType.FROM))
                .to(stage2.children, createPropertiesObject(PropType.TO))
                .from(stage3.children, createPropertiesObject(PropType.FROM))
                .to(stage3.children, createPropertiesObject(PropType.TO))
        }
    }, [ gsapTimeline, elRefs, getCurrents, currentElement ]);

    return [ elRefs, currentElement!.content ];
};

const createPropertiesObject = (type: PropType, ifFirst = false): object => {
    const ease: string = 'easeInOut';
    const y: string = '100%';
    const stagger: number = .01;
    const duration: number = .6;
    if (type === PropType.FROM) {
        return { y, duration, ease, stagger, delay: !ifFirst ? -0.5 : 0 };
    }
    return { y: `-${y}`, duration, ease, stagger, delay: 3 };
};

export default useSingleRowGroupAnimation;