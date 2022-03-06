/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useProjectListAnimations.ts
 * Last modified: 05/03/2022, 23:04
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
import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gsap, Power2 } from 'gsap';
import { Gsap } from '../../helper-primitives/GsapAnimations';
import { SubpagesContent } from '../../static/subpagesMainContent';

import useMouseMove from '../background-images/useMouseMove';
import useMultipleRefs from '../reusable/useMultipleRefs';
import useDidMount from '../reusable/useDidMount';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

type HookReturned = [
    React.MutableRefObject<any>[],
    { active: boolean, id: string },
    (e: React.MouseEvent, projectId: string) => void,
    (projectId: string) => void,
];

/**
 * Custom hook responsible for projects list initialised on load and after click link animations sequence.
 *
 * @return { HookReturned }:
 *      1. Referential object,
 *      2. active and id property (from click useState),
 *      3. Mouse event callback function,
 *      4. Click link event callback function.
 */
const useProjectListAnimations = (): HookReturned => {

    const { projects, projectsPhotos }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { currScrollPos, browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const [ click, setClick ] = useState<{ active: boolean, id: string }>({ active: false, id: '' });
    const master = gsap.timeline();

    const { elRefs, getCurrents } = useMultipleRefs(projects.length);
    const handleMouseEvent = useMouseMove();
    const dispatcher = useDispatch();
    const isMount = useDidMount();

    const mouseEventAnimation = (e: React.MouseEvent, projectId: string): void => {
        if (!click.active) {
            handleMouseEvent(e, projectId, SubpagesContent.projects.images[0]);
        }
    };

    const handleClick = (projectId: string): void => {
        setClick(prevState => ({ active: !prevState.active, id: projectId }));
    };

    // Triggered on click: scroll into half clientHeight page algorigthm.
    useLayoutEffect(() => {
        if (!isMount) {
            const childrens = getCurrents().map(element => element.children[0]);
            const currentElement = childrens.find(({ dataset }) => dataset.id === click.id);
            const allOthersElements = childrens
                .filter(({ dataset }) => dataset.id !== click.id)
                .map(el => el.parentElement);
            if (currentElement) {
                const findProject = projectsPhotos.find(project => project.projectId === click.id)!;
                dispatcher(ReduxDOMActions.setImageOnSetProject(findProject.projectId));
                const allHeight = Gsap.getHeightFromTopToCurrentElement(childrens, click.id);
                const yAxios = (allHeight + window.innerHeight / 2) - currentElement.children[0].offsetHeight / 2;
                master.to(window, { duration: 1.1, ease: Power2.easeInOut, scrollTo: { y: yAxios } });
                if (browserX > 1030) {
                    master.to(allOthersElements, { x: -100, autoAlpha: 0 }, '>');
                }
            }
        }
    }, [ click ]);
    
    // Show elements on scroll (only in first render, after that elements are still in prev position).
    useLayoutEffect(() => {
        let scrollInit = 350;
        getCurrents().forEach(element => {
            if (browserX > 1030 && !click.active) {
                if (currScrollPos > scrollInit) {
                    gsap.to(element, { x: 0, autoAlpha: 1, duration: 0 });
                }
            }
            scrollInit += element.offsetHeight;
        });
    }, [ currScrollPos, getCurrents ]);
    
    return [ elRefs, click, mouseEventAnimation, handleClick ];
};

export default useProjectListAnimations;