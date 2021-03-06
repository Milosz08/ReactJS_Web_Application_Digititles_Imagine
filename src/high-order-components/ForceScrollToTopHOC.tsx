/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ForceScrollToTopHOC.tsx
 * Last modified: 25/02/2022, 00:07
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
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import { ReduxDOMActions } from '../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../redux/redux-dom-manipulate/types';


export interface ReactNodeProp {
    children: React.ReactNode;
}

/**
 * Helper React component responsible for forced scroll to top on every change route.
 * Also removed stillImage flag.
 *
 * @param children { React.ReactNode } - all wraped JSX elements.
 */
const ForceScrollToTopHOC: React.FC<ReactNodeProp> = ({ children }): JSX.Element => {

    const location = useLocation();
    const dispatcher = useDispatch();

    useEffect(() => {
        if (!location.pathname.includes('/projects/project')) {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.STILL_IMAGE, false));
        }
        window.scrollTo(0, 0);
    }, [ dispatcher, location ]);

    return (
        <>
            {children}
        </>
    );
};

export default ForceScrollToTopHOC;