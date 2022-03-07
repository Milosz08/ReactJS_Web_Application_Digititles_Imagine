/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useInsertHeightElement.ts
 * Last modified: 06/03/2022, 23:26
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
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

/**
 * Custom hook responsible for inserting height value of element passed in props (and save
 * into Redux store).
 *
 * @param ref { React.MutableRefObject<any> } - referential object element.
 * @param ifFind { boolean } - usage in single project page (invoke, when flag is true).
 */
const useInsertHeightElement = (ref: React.MutableRefObject<any>, ifFind: boolean): null => {

    const state: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { whileChangingRoutes, browserX, browserY } = state;

    const dispatcher = useDispatch();

    useLayoutEffect(() => {
        if (!whileChangingRoutes && Boolean(ref) && ifFind) {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(
                ReduxDOMstateKeys.TOTAL_HEIGHT, ref.current!.offsetHeight
            ));
        }
    }, [ dispatcher, ifFind, ref, whileChangingRoutes, browserX, browserY ]);

    return null;
};

export default useInsertHeightElement;