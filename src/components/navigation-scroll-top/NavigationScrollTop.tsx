/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NavigationScrollTop.tsx
 * Last modified: 23/02/2022, 20:45
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
import { useSelector } from 'react-redux';

import { Gsap } from '../../helper-primitives/GsapAnimations';
import useChangeVisibilityBasedMark from '../../hooks/navigation/useChangeVisibilityBasedMark';

import { RootState } from '../../redux/store';
import { AnimationVisibility } from '../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

import {
    NavigationScrollTopContainer, NavigationScrollTopProgressBar, NavigationScrollTopProgressBarActive
} from './NavigationScrollTop.styles';


const NavigationScrollTop: React.FC = (): JSX.Element => {

    const { scrollPercentage, ifFixed }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const [ navigationRef ] = useChangeVisibilityBasedMark({
        reversed: true, animActivate: 500, visibleType: AnimationVisibility.FLEX, disableMediaQueryValue: 1030
    });

    return (
        <NavigationScrollTopContainer
            onClick = {(): void => Gsap.scrollIntoContext(document.documentElement)}
            ref = {navigationRef}
            $ifFixed = {ifFixed.navigation}
        >
            Scroll to Top
            <NavigationScrollTopProgressBar>
                <NavigationScrollTopProgressBarActive
                    $percentageFill = {scrollPercentage}
                />
            </NavigationScrollTopProgressBar>
        </NavigationScrollTopContainer>
    );
};

export default NavigationScrollTop;