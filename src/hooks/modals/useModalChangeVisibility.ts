/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useModalChangeVisibility.ts
 * Last modified: 21/03/2022, 12:52
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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { gsap } from 'gsap';

import useDidMount from '../reusable/useDidMount';
import useMultipleRefs from '../reusable/useMultipleRefs';
import useDisableScroll from '../reusable/useDisableScroll';

import { RootState } from '../../redux/store';
import { AllModals } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

/**
 * Custom hook responsible for change visible sequence animation on modal (based modal type parameter).
 *
 * @param modalType { AllModals } - type of modal (enum from redux state types file).
 * @return { React.MutableRefObject<any>[] } - referential tuple of background ref and content ref.
 */
const useModalChangeVisibility = (modalType: AllModals): React.MutableRefObject<any>[] => {
    
    const { modalsState }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    
    const { elRefs, getCurrents } = useMultipleRefs(2);
    const [ disable, enable ] = useDisableScroll();
    const isMount = useDidMount();
    
    const selectedModal = modalsState[modalType];
    const sequence = gsap.timeline();
    
    useEffect(() => {
        if (!isMount && getCurrents) {
            const [ background, content ] = getCurrents();
            if (selectedModal) {
                disable();
                sequence.to(background, { autoAlpha: 1, display: 'flex' });
                sequence.to(content, { y: 0, autoAlpha: 1 }, '>')
            } else {
                enable();
                sequence.to(content, { y: -30, autoAlpha: 0 })
                sequence.to(background, { autoAlpha: 0, display: 'none' }, '>');
            }
        }
    }, [ getCurrents, isMount, selectedModal, sequence ]);
    
    return elRefs;
};

export default useModalChangeVisibility;