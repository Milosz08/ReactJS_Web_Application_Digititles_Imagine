/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: actions.ts
 * Last modified: 23/02/2022, 16:19
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

import Utils from '../utils';

import {
    ActiveAction, AllSections, AnimationStages, GettingStartedNavElms, ProjectSections, ReduxDOMreducerTypes,
    ReduxDOMstateKeys, ServicesSections
} from './types';

export type SectionKey = ProjectSections | ServicesSections;

interface ReturnedToReducer {
    type: ReduxDOMreducerTypes | string;
    payload?: {
        [key: string]: any;
    };
}

export class ReduxDOMActions {

    public static changeFirstLevelElement = (field: ReduxDOMstateKeys, value: any): ReturnedToReducer => ({
        type: Utils.addSuffix(ReduxDOMreducerTypes.CHANGE_FIRST_LEVEL_FIELD, field),
        payload: {
            field, value,
        }
    });

    public static openCloseMainMenu = (openClosed: AnimationStages | null = null): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.OPEN_CLOSE_MAIN_MENU,
        payload: {
            openClosed,
        }
    });

    public static setScrollPositions = (fromTop: number, fromBack: number): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.CHANGE_SCROLL_POSITIONS,
        payload: {
            fromTop, fromBack
        }
    });

    public static setBrowserSizes = (widthX: number, heightY: number): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.SET_BROWSER_WIDTH_AND_HEIGHT,
        payload: {
            widthX, heightY,
        }
    });

    public static hideAllImages = (): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.HIDE_ALL_IMAGES,
    });

    public static setImageOnSetProject = (projectId: string): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.SET_IMAGE_ON_SET_PROJECT,
        payload: {
            projectId,
        }
    });

    public static setStaticContent = (background: boolean, navigation: boolean): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.SET_STICKY_CONTENT,
        payload: {
            background, navigation
        }
    });

    public static changeActiveSection = (sectionKey: AllSections, currentSection: SectionKey | null): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.CHANGE_ACTIVE_SECTION,
        payload: {
            sectionKey, currentSection,
        }
    });

    public static activeElementIntoArray = (addingElement: GettingStartedNavElms | null, action = ActiveAction.ADD): ReturnedToReducer => ({
        type: ReduxDOMreducerTypes.ADD_NEW_ELEMENT_INTO_ACTIVE_ARRAY,
        payload: {
            addingElement, action
        }
    });

}