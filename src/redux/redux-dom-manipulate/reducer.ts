/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: reducer.ts
 * Last modified: 23/02/2022, 16:20
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

import { InitStateDOM, InitStateDOMtypes } from './initialState';
import { ActiveAction, ReduxDOMreducerTypes } from './types';

import Utils from '../utils';

/**
 * Redux reducer for manipulating DOM elements and animations.
 */
const reduxReducerDOM = (state = InitStateDOM, action: any): InitStateDOMtypes => {
    switch (Utils.normalised(action.type)) {

        case ReduxDOMreducerTypes.CHANGE_FIRST_LEVEL_FIELD: {
            const { field, value } = action.payload;
            return { ...state, [field]: value };
        }

        case ReduxDOMreducerTypes.OPEN_CLOSE_MAIN_MENU: {
            const { openClosed } = action.payload;
            const { ifMenuOpen, hamActive } = state;
            if (openClosed !== null) {
                return { ...state, ifMenuOpen: Boolean(openClosed), hamActive: Boolean(openClosed) };
            }
            return { ...state, ifMenuOpen: !ifMenuOpen, hamActive: !hamActive };
        }

        case ReduxDOMreducerTypes.CHANGE_SCROLL_POSITIONS: {
            const { fromTop: currScrollPos, fromBack: currScrollFromBottom } = action.payload;
            const bodyTotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = Math.floor(currScrollPos / bodyTotalHeight * 100);
            return { ...state, currScrollPos, currScrollFromBottom, scrollPercentage };
        }

        case ReduxDOMreducerTypes.SET_BROWSER_WIDTH_AND_HEIGHT: {
            const { widthX: browserX, heightY: browserY } = action.payload;
            return { ...state, browserX, browserY };
        }

        case ReduxDOMreducerTypes.HIDE_ALL_IMAGES: {
            return { ...state, onHoverActiveImageId: null, currentActiveServiceSection: null };
        }

        case ReduxDOMreducerTypes.SET_IMAGE_ON_SET_PROJECT: {
            const { projectId } = action.payload;
            return { ...state, onHoverActiveImageId: projectId, stillImage: true };
        }

        case ReduxDOMreducerTypes.SET_STICKY_CONTENT: {
            const { background, navigation } = action.payload;
            return { ...state, ifFixed: { background, navigation } };
        }

        case ReduxDOMreducerTypes.CHANGE_ACTIVE_SECTION: {
            const { sectionKey, currentSection } = action.payload;
            return { ...state, activeSection: { ...state.activeSection, [sectionKey]: currentSection } };
        }

        case ReduxDOMreducerTypes.ADD_NEW_ELEMENT_INTO_ACTIVE_ARRAY: {
            const { addingElement, action: elementAction } = action.payload;
            if (elementAction === ActiveAction.REMOVE_ALL) {
                return { ...state, allActiveSections: [] };
            }
            return { ...state, allActiveSections: [ ...state.allActiveSections, addingElement ] };
        }

        case ReduxDOMreducerTypes.CHANGE_MODAL_VISIBILITY: {
            const { modalType, visibility } = action.payload;
            return { ...state, modalsState: { ...state.modalsState, [modalType]: visibility } };
        }

        case ReduxDOMreducerTypes.INSERT_CMS_SELECTED_PROJECT: {
            const { title, dotColor } = action.payload;
            return { ...state, cmsSelectedProject: { title, dotColor } };
        }

        default: {
            return state;
        }

    }
};

export default reduxReducerDOM;