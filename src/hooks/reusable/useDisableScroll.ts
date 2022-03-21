/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useDisableScroll.ts
 * Last modified: 05/03/2022, 14:43
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

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook responsible for enable or disable page scroll (also works on mobile devices touch event).
 *
 * @return { () => void, () => void } - first: disable scroll, second: enabled scroll.
 */
const useDisableScroll = (): [ () => void, () => void ] => {

    const scrollBlocked = useRef<boolean>(false);
    const dispatcher = useDispatch();

    const html = document.documentElement;
    const { body } = document;

    const blockScroll = () => {
        if (!body || !body.style || scrollBlocked.current) {
            return;
        }
        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue('padding-right')) || 0;
        html.style.position = 'relative';
        html.style.overflow = 'hidden';
        body.style.position = 'relative';
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
        body.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
        body.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
        scrollBlocked.current = true;
        dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.SCROLL_DISABLED_PX, scrollBarWidth));
    };

    const allowScroll = () => {
        if (!body || !body.style || !scrollBlocked.current) {
            return
        }
        html.style.position = '';
        html.style.overflow = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';
        scrollBlocked.current = false;
        dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.SCROLL_DISABLED_PX, 0));
    };

    return [ blockScroll, allowScroll ];
};

export default useDisableScroll;