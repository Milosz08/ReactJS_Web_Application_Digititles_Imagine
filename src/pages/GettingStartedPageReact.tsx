/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GettingStartedPageReact.tsx
 * Last modified: 21/02/2022, 21:23
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
import { useRef } from 'react';

import useForcePageReload from '../hooks/reusable/useForcePageReload';

import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { InitStateDOMtypes } from '../redux/redux-dom-manipulate/initialState';

import GettingStartedMultipleRefsContext from '../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import NavigationBottomBar from '../components/navigation-bottom-bar/NavigationBottomBar';
import GettingStartedInitContent from '../components/getting-started-init-content/GettingStartedInitContent';
import GettingStartedFormStructure from '../components/getting-started-form-structure/GettingStartedFormStructure';


const GettingStartedPageReact: React.FC = (): JSX.Element => {

    const { browserX }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const formStructure = useRef<HTMLDivElement>(null);
    useForcePageReload();

    return (
        <GettingStartedMultipleRefsContext>
            {browserX <= 1030 && <NavigationBottomBar
                listeners = {[ { ariaLabel: 'registration form', goto: formStructure } ]}
            />}
            <GettingStartedInitContent/>
            <GettingStartedFormStructure
                referential = {formStructure}
            />
        </GettingStartedMultipleRefsContext>
    );
};

export default GettingStartedPageReact;