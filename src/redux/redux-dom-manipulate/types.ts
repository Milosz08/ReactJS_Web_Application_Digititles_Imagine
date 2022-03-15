/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: types.ts
 * Last modified: 23/02/2022, 15:29
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

export enum ReduxDOMreducerTypes {
    CHANGE_FIRST_LEVEL_FIELD = 'CHANGE_FIRST_LEVEL_FIELD__D',
    OPEN_CLOSE_MAIN_MENU = 'OPEN_CLOSE_MAIN_MENU__D',
    CHANGE_SCROLL_POSITIONS = 'CHANGE_SCROLL_POSITIONS__D',
    SET_BROWSER_WIDTH_AND_HEIGHT = 'SET_BROWSER_WIDTH_AND_HEIGHT__D',
    HIDE_ALL_IMAGES = 'HIDE_ALL_IMAGES__D',
    SET_IMAGE_ON_SET_PROJECT = 'SET_IMAGE_ON_SET_PROJECT__D',
    SET_STICKY_CONTENT = 'SET_STICKY_CONTENT__D',
    CHANGE_ACTIVE_SECTION = 'CHANGE_ACTIVE_SECTION__D',
    ADD_NEW_ELEMENT_INTO_ACTIVE_ARRAY = 'ADD_NEW_ELEMENT_INTO_ACTIVE_ARRAY__D',
}

export enum ReduxDOMstateKeys {
    WHILE_CHANGING_ROUTE = 'whileChangingRoutes',
    HAM_ACTIVE = 'hamActive',
    CURRENT_ACTIVE_SERVICE_SECTION = 'currentActiveServiceSection',
    ON_HOVER_ACTIVE_IMAGE_ID = 'onHoverActiveImageId',
    STILL_IMAGE = 'stillImage',
    SCROLL_DISABLED_PX = 'scrollDisabledPx',
    TOTAL_HEIGHT = 'totalHeight',
    HEADER_LIGHT = 'headerLight',
    GETTING_STARTED_ACTIVE_SECTION = 'gettingStartedActiveSection',
}

export enum AnimationStages {
    HIDE,SHOW,
}

export enum AnimationDirections {
    TOP, RIGHT, BOTTOM, LEFT,
}

export enum AnimationVisibility {
    FLEX = 'flex',
    BLOCK = 'block',
}

export enum AllSections {
    PROJECT = 'project',
    SERVICES = 'services',
}

export enum ProjectSections {
    TITLE = 'title',
    DESCRIPTION = 'description',
    PRODUCTION = 'production',
    TECHNICALS = 'technical Spec',
}

export enum ServicesSections {
    MAIN_CREDITS = 'main credits',
    END_CREDITS = 'end credits',
    SUBTITLES = 'subtitles',
    TECHNICALS = 'technicals',
}

export enum ProjectBlocksSections {
    ABOUT = 'aboutSection',
    PRODUCTION = 'prodSection',
}

export enum GettingStartedNavElms {
    SERVICE = 'Which service do you need',
    FILMMAKER = 'What kind of filmmaker are you',
    BUDGET = 'How budget do you have',
    DETAILS = 'Your details',
}

export enum ActiveAction {
    ADD = 'ADD',
    REMOVE_ALL = 'REMOVE_ALL',
}