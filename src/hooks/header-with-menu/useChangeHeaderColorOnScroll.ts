/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangeHeaderColorOnScroll.ts
 * Last modified: 10/03/2022, 19:53
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

interface HookProps {
    enableRef: React.MutableRefObject<any>;
    disableRef?: React.MutableRefObject<any> | null;
}

/**
 * Custom hook responsible for change header hamburger menu colour on change scroll position.
 * Based ref object height passing in hook props.
 *
 * @param enableRef { React.MutableRefObject<any> } - referential object.
 * @param disableRef { React.MutableRefObject<any> } - extra value indicate returned element to initial colour (by default 0).
 */
const useChangeHeaderColorOnScroll = ({ enableRef, disableRef }: HookProps): null => {

    const { currScrollPos, browserY }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    
    const dispatcher = useDispatch();

    // on scroll event
    useEffect(() => {
        if (enableRef) {
            const enableH = enableRef.current.offsetHeight + browserY - 90;
            const disableH = document.body.offsetHeight - 310 - (disableRef ? disableRef!.current.offsetHeight : 0);
            dispatcher(ReduxDOMActions.changeFirstLevelElement(
                ReduxDOMstateKeys.HEADER_LIGHT, currScrollPos > enableH && currScrollPos <= disableH
            ));
        }
        return () => {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.HEADER_LIGHT, false));
        }
    }, [ currScrollPos, disableRef, dispatcher, enableRef, browserY ]);

    return null;
};

export default useChangeHeaderColorOnScroll;