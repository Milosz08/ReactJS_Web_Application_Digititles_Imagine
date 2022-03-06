/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useMouseMove.ts
 * Last modified: 27/02/2022, 17:30
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
import { useDispatch } from 'react-redux';

import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook responsible for change image on mouse events (mouseenter or mouseleave). If user invoke this
 * function on different type of event, hook throw exception.
 *
 * @param activeImage { string? } - current image to set in redux state.
 * @return { (e: React.MouseEvent, imageParam?: string, defaultImage? : string) => void } - mouse event handler function.
 */
const useMouseMove = (activeImage?: string): (e: React.MouseEvent, imageParam?: string, defaultImage? : string) => void => {

    const { ON_HOVER_ACTIVE_IMAGE_ID } = ReduxDOMstateKeys;
    const dispatcher = useDispatch();

    return (e: React.MouseEvent, imageParam?: string, defaultImage? : string) => {
        switch (e.type) {
            case 'mouseenter':
                dispatcher(ReduxDOMActions.changeFirstLevelElement(ON_HOVER_ACTIVE_IMAGE_ID, activeImage || imageParam));
                break;
            case 'mouseleave':
                dispatcher(ReduxDOMActions.changeFirstLevelElement(ON_HOVER_ACTIVE_IMAGE_ID, defaultImage || null));
                break;
            default:
                throw new Error(`Unexpected mouse event! Event: ${e.type} is not acceptable.`);
        }
    };
};

export default useMouseMove;