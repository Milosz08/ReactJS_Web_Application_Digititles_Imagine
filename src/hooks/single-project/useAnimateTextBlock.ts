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
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { gsap } from 'gsap';

import { RoutingPaths } from '../../static/appRouting';
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
 * @param additionalParent { React.MutableRefObject<any> } - additional parent referential element.
 * @param section { { key: AllSections, value: SectionKey } } - activate section label element (by key and value).
 */
const useAnimateTextBlock = (
    parentElement: React.MutableRefObject<any>, { key, value }: HookProps, additionalParent?: React.MutableRefObject<any>
): null => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);
    const dispatcher = useDispatch();
    const { pathname } = useLocation();

    const invokeHandlerOnLeave = useCallback(() => {
        if (value === ServicesSections.MAIN_CREDITS || value === ProjectSections.DESCRIPTION) {
            dispatcher(ReduxDOMActions.changeActiveSection(
                key, pathname === RoutingPaths.SERVICES ? null : ProjectSections.TITLE
            ));
        }
    }, [ pathname, dispatcher, key, value ]);

    const invokeHandlerOnEnter = useCallback(() => {
        dispatcher(ReduxDOMActions.changeActiveSection(key, value));
    }, [ dispatcher, key, value ]);

    useEffect(() => {
        if ((Boolean(parentElement) && findProject) || pathname === RoutingPaths.SERVICES) {
            const childrens = Boolean(additionalParent)
                ? [...parentElement.current.children].slice(0, -1).concat(additionalParent!.current.children)
                : parentElement.current.children;
            gsap.from(childrens, {
                x: -50, autoAlpha: 0, stagger: .2, scrollTrigger: {
                    trigger: parentElement.current,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: invokeHandlerOnEnter,
                    onEnterBack: invokeHandlerOnEnter,
                    onLeaveBack: invokeHandlerOnLeave,
                },
            });
        }
    }, [ findProject, invokeHandlerOnEnter, parentElement, additionalParent ]);

    return null;
};

export default useAnimateTextBlock;