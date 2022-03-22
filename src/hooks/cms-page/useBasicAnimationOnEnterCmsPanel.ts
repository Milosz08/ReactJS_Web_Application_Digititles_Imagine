/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useBasicAnimationOnEnterCmsPanel.ts
 * Last modified: 22/03/2022, 15:22
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
 * Custom hook responsible for applying animation on enter in cms panel main page.
 *
 * @return { React.MutableRefObject<any> } - referential object.
 */
const useBasicAnimationOnEnterCmsPanel = (): React.MutableRefObject<any> => {

    const parentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (Boolean(parentRef.current)) {
            gsap.from(parentRef.current!.children, { y: 30, autoAlpha: 0, stagger: .2, delay: .5 });
        }
    }, []);

    return parentRef;
};

export default useBasicAnimationOnEnterCmsPanel;