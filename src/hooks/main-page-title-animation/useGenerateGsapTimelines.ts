/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useGenerateGsapTimelines.ts
 * Last modified: 25/02/2022, 03:25
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
import { useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';

/**
 * Custom hook responsible for creating three GSAP timelines for single rows and one Gsap master timeline.
 * Also in useLayoutEffect hook, connect all timelines to master timeline.
 *
 * @return { grabber: React.MutableRefObject<any>, titleRefs: gsap.core.Timeline[] } - first: animation container
 *         referential object, second: all second level GSAP timelines (rows).
 */
const useGenerateGsapTimelines = (): { grabber: React.MutableRefObject<any>, titleRefs: gsap.core.Timeline[] } => {

    const master = gsap.timeline({ repeat: -1, delay: 1 });
    const grabber = useRef<HTMLDivElement>(null);

    const firstTitle = gsap.timeline();
    const secondTitle = gsap.timeline();
    const thirdTitle = gsap.timeline();

    useLayoutEffect((): void => {
        master.add(firstTitle).add(secondTitle, .2).add(thirdTitle, .4);
    }, [ firstTitle, master, secondTitle, thirdTitle ]);

    return { grabber, titleRefs: [ firstTitle, secondTitle, thirdTitle ] };
};

export default useGenerateGsapTimelines;