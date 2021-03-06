/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useBackgroundImageParallax.ts
 * Last modified: 09/03/2022, 01:28
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
import { useSelector } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

/**
 * Custom hook responsible for create parallax effect on background image in single project page.
 *
 * @return { React.MutableRefObject<any> } - referential object.
 */
const useBackgroundImageParallax = (): React.MutableRefObject<any> => {

    const { currScrollPos }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const parallaxRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        if (parallaxRef) {
            gsap.to(parallaxRef.current, { y: -(window.scrollY * 0.2) });
        }
    }, [ currScrollPos, parallaxRef ]);

    return parallaxRef;
};

export default useBackgroundImageParallax;