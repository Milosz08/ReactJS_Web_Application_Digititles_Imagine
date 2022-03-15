/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangeActiveSectionScroll.ts
 * Last modified: 14/03/2022, 00:57
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
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gsap } from 'gsap';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { GettingStartedNavElms, ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook resposible for change active section in getting started page on scroll event.
 *
 * @param refObject { React.MutableRefObject<any> } - scroll to referential object.
 * @param active { GettingStartedNavElms } - active navigation element.
 */
const useChangeActiveSectionScroll = (refObject: React.MutableRefObject<any>, active: GettingStartedNavElms): null => {

    const { browserX, allActiveSections }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const dispatcher = useDispatch();

    const handleEnterInvoker = useCallback(() => {
        if (allActiveSections.find(section => section === active)) {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.GETTING_STARTED_ACTIVE_SECTION, active));
        }
    }, [ active, dispatcher, allActiveSections ]);

    useEffect(() => {
        if (refObject && browserX > 1030) {
            gsap.from(refObject.current, {
                scrollTrigger: {
                    trigger: refObject.current,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: handleEnterInvoker,
                    onEnterBack: handleEnterInvoker,
                }
            });
        }
    }, [ browserX, handleEnterInvoker, refObject ]);

    return null;
};

export default useChangeActiveSectionScroll;