/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useShowHideFooterSectionsOnScrollTrigger.ts
 * Last modified: 24/02/2022, 02:14
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
import { useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { Expo, gsap } from 'gsap';

import useMultipleRefs from '../reusable/useMultipleRefs';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';


interface ReturnedTypes {
    elRefs: React.MutableRefObject<any>[];
    footerRef: React.MutableRefObject<any>;
}

/**
 * Custom hook reponsible for show/hide footer sections (gsap stagger effect).
 *
 * @return { React.MutableRefObject<any>>[], React.MutableRefObject<HTMLDivElement> } - returned all sections
 *         referential objects and footer root element referential object.
 */
const useShowHideFooterSectionsOnScrollTrigger = (): ReturnedTypes => {

    const { currScrollFromBottom, browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const footerRef = useRef<HTMLDivElement>();
    const { elRefs, getCurrents } = useMultipleRefs(4);
    const [ hidden, setHidden ] = useState<boolean>(true);

    useLayoutEffect((): void => {
        if (elRefs.every(ref => Boolean(ref)) && Boolean(footerRef) && browserX > 760) {
            const footerHalfHeight = footerRef.current!.offsetHeight;
            if (currScrollFromBottom < footerHalfHeight / 2 && hidden) {
                setHidden(false);
                gsap.to(getCurrents(), {
                    y: 0, autoAlpha: 1, ease: Expo.easeOut, duration: 1.2, stagger: .2,
                    scrollTrigger: { trigger: getCurrents() },
                });
            } else if (currScrollFromBottom >= footerHalfHeight && !hidden) {
                setHidden(true);
                gsap.to(getCurrents(), { y: 30, autoAlpha: 0, });
            }
        }
    }, [ currScrollFromBottom, elRefs, getCurrents, hidden ]);

    return { elRefs, footerRef };
};

export default useShowHideFooterSectionsOnScrollTrigger;