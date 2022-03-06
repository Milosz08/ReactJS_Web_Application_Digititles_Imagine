/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useHideMenuOnChangeRoute.ts
 * Last modified: 23/02/2022, 17:19
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { AnimationStages } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

/**
 * Custom hook responsible for hide menu immediately after change route from absolute to different.
 *
 * @return { boolean } - indicator of menu state (open/closed)
 */
const useHideMenuOnChangeRoute = (): boolean => {

    const { ifMenuOpen, whileChangingRoutes }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const dispatcher = useDispatch();

    useEffect(() => {
        if(whileChangingRoutes) {
            dispatcher(ReduxDOMActions.openCloseMainMenu(AnimationStages.HIDE));
        }
    }, [ dispatcher, whileChangingRoutes ]);

    return ifMenuOpen;
};

export default useHideMenuOnChangeRoute;