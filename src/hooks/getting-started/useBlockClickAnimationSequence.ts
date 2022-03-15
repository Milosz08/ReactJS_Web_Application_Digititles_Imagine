/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useBlockClickAnimationSequence.ts
 * Last modified: 14/03/2022, 17:45
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
import { useDispatch, useSelector } from 'react-redux';

import { Expo, gsap } from 'gsap';

import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { GettingStartedNavElms, ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { RootState } from '../../redux/store';

interface HookProps {
    nextContainerRef: React.MutableRefObject<any>;
    nextRef: { header: React.MutableRefObject<any>, childrens: React.MutableRefObject<any> };
    nextActive: GettingStartedNavElms;
}

/**
 * Custom hook responsible for invoke animation sequence on click single block picture element.
 *
 * @param nextContainerRef { React.MutableRefObject<any> } - container element.
 * @param nextRef { header: React.MutableRefObject<any>, childrens: React.MutableRefObject<any> } - children elements.
 * @param nextActive { GettingStartedNavElms } - current active section to set.
 * @return { () => void } - funciton to invoking animation sequence.
 */
const useBlockClickAnimationSequence = ({ nextContainerRef, nextRef, nextActive }: HookProps): () => void => {

    const { browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const dispatcher = useDispatch();

    const sequence = gsap.timeline({ delay: 2 });

    const changeActiveSection = (): void => {
        dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.GETTING_STARTED_ACTIVE_SECTION, nextActive));
    };

    return (): void => {
        const allServicesRefs = [ nextRef!.header.current ].concat([ ...nextRef!.childrens.current.children ]);
        dispatcher(ReduxDOMActions.activeElementIntoArray(nextActive));
        sequence.to(nextContainerRef.current, { display: 'flex' });
        sequence.to(window, {
            duration: 1.5, ease: Expo.easeInOut, onStart: changeActiveSection, scrollTo: nextContainerRef.current
        });
        if (browserX > 1030) {
            sequence.to(allServicesRefs, { y: 0, autoAlpha: 1, stagger: .2 }, '>');
        }
    };
};

export default useBlockClickAnimationSequence;