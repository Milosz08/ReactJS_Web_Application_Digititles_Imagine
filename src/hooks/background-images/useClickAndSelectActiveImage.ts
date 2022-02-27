/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useClickAndSelectActiveImage.ts
 * Last modified: 27/02/2022, 02:01
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

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook responsible for toggling saved image in redux store. Necessary for image animations.
 *
 * @param activeImage { string } - current image (from list iteration).
 * @return { [ boolean, boolean, () => void ] } - first: active block flag, second: change active state function.
 */
const useClickAndSelectActiveImage = (activeImage: string): [ boolean, () => void ] => {

    const { currentActiveServiceSection }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const ifActive: boolean = currentActiveServiceSection === activeImage;

    const { CURRENT_ACTIVE_SERVICE_SECTION } = ReduxDOMstateKeys;
    const dispatcher = useDispatch();

    const handleClickBoxElement = (): void => {
        if (ifActive) {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(CURRENT_ACTIVE_SERVICE_SECTION, null));
        } else {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(CURRENT_ACTIVE_SERVICE_SECTION, activeImage));
        }
    };

    return [ ifActive, handleClickBoxElement ];
};

export default useClickAndSelectActiveImage;