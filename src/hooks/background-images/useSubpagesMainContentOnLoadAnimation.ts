/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useSubpagesMainContentOnLoadAnimation.ts
 * Last modified: 28/02/2022, 16:33
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

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

/**
 * Custom hook responsible for initialised title and description animations is SubpagesMainContent component.
 *
 * @param ignoreAsyncData { boolean? } - flag decided to ignore waiting for fetch data.
 * @param fromBottom { number? } - pixels from bottom to start animation state (optional, by default 80).
 * @return { React.MutableRefObject<any>[] } - all referential objects in array.
 */
const useSubpagesMainContentOnLoadAnimation = (ignoreAsyncData?: boolean, fromBottom = 80): React.MutableRefObject<any>[] => {

    const { browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const { elRefs, getCurrents } = useMultipleRefs(2);
    
    const master = gsap.timeline({ delay: .7 });
    const desktop = browserX > 1030;
    
    useLayoutEffect(() => {
        if (!status.loadingProjects || ignoreAsyncData) {
            const [ title, description ] = getCurrents();
            master.to(title, { y: -fromBottom, autoAlpha: 1 });
            master.to(description, { [desktop ? 'x' : 'y']: 0, autoAlpha: 1 }, desktop ? '>' : .1);
        }
    }, [ desktop, elRefs, getCurrents, ignoreAsyncData, master, status.loadingProjects ]);

    return elRefs;
};

export default useSubpagesMainContentOnLoadAnimation;