/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useOnHoverSelectImages.ts
 * Last modified: 28/02/2022, 22:08
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
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Expo, gsap } from 'gsap';

import useMultipleRefs from '../reusable/useMultipleRefs';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';

interface HookProps {
    countOfImages: number;
    ifAutoAlpha?: boolean;
    invoke: {
        hidePx: number;
        showPx: number;
    }
}

/**
 * Custom hook responsible for show/hide background images based active image element in redux state. Also include
 * listener, which in every change route path, clearing images state (set null values).
 *
 * @param countOfImages { number } - all images count.
 * @param ifAutoAlpha { boolean? } - decided, if GSAP also must change opacity and visibility styles (by default: false).
 * @param invoke { { hidePx: number, showPx: number } } - invoke hide and show value in pixels.
 * @return { React.MutableRefObject<any>[] } - array with all referential objects.
 */
const useOnHoverSelectImages = ({ countOfImages, ifAutoAlpha, invoke }: HookProps): React.MutableRefObject<any>[] => {

    const { onHoverActiveImageId }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const { elRefs, getCurrents } = useMultipleRefs(countOfImages);
    const { pathname } = useLocation();
    const dispatcher = useDispatch();

    // image show/hide effect
    useLayoutEffect(() => {
        getCurrents().forEach(current => {
            if (current.src.includes(onHoverActiveImageId)) {
                gsap.to(current, { x: invoke.showPx, duration: .5, ease: Expo.easeInOut, autoAlpha: 1 });
            } else {
                gsap.to(current, {
                    x: invoke.hidePx, duration: .5, ease: Expo.easeInOut, autoAlpha: ifAutoAlpha ? 0 : 1
                });
            }
        });
    }, [ getCurrents, ifAutoAlpha, invoke.hidePx, invoke.showPx, onHoverActiveImageId ]);

    // reset image on every change path
    useEffect(() => {
        dispatcher(ReduxDOMActions.hideAllImages());
    }, [ dispatcher, pathname ]);

    return elRefs;
};

export default useOnHoverSelectImages;