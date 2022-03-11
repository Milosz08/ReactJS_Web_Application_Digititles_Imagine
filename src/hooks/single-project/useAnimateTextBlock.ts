/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useAnimateTextBlock.ts
 * Last modified: 08/03/2022, 15:56
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
import { useCallback, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { gsap } from 'gsap';

import { ProjectContext, ProjectContextTypes } from '../../pages/SingleProjectPageReact';

import { ReduxDOMActions, SectionKey } from '../../redux/redux-dom-manipulate/actions';
import { AllSections, ProjectSections, ServicesSections } from '../../redux/redux-dom-manipulate/types';

interface HookProps {
    key: AllSections;
    value: SectionKey;
}

/**
 * Custom hook responsible for include enter/outer animation for all children of root element (passing
 * in params). Also changing active section state (in redux store).
 *
 * @param parentElement { React.MutableRefObject<any> } - referential parent container.
 * @param section { { key: AllSections, value: SectionKey } } - activate section label element (by key and value).
 */
const useAnimateTextBlock = (parentElement: React.MutableRefObject<any>, { key, value }: HookProps): null => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);
    const dispatcher = useDispatch();

    const invokeHandlerOnEnter = useCallback(() => {
        dispatcher(ReduxDOMActions.changeActiveSection(key, value));
    }, [ dispatcher, key, value ]);

    const invokeHandlerOnLeave = useCallback(() => {
        const { TITLE, DESCRIPTION } = ProjectSections;
        const { END_CREDITS, MAIN_CREDITS } = ServicesSections;
        if (value === END_CREDITS || value === DESCRIPTION) {
            dispatcher(ReduxDOMActions.changeActiveSection(key, key === AllSections.SERVICES ? MAIN_CREDITS : TITLE));
        }
    }, [ dispatcher, key, value ]);

    useEffect(() => {
        if (Boolean(parentElement) && findProject) {
            console.log(parentElement.current.children);
            gsap.from(parentElement.current.children, {
                x: -50, autoAlpha: 0, stagger: .2, scrollTrigger: {
                    trigger: parentElement.current,
                    start: 'center bottom',
                    end: 'bottom bottom',
                    onEnter: invokeHandlerOnEnter,
                    onEnterBack: invokeHandlerOnEnter,
                    onLeaveBack: invokeHandlerOnLeave,
                },
            });
        }
    }, [ findProject, invokeHandlerOnEnter, invokeHandlerOnLeave, parentElement ]);

    return null;
};

export default useAnimateTextBlock;
