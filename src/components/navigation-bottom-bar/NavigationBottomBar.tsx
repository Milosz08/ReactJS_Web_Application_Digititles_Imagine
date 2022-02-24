/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NavigationBottomBar.tsx
 * Last modified: 23/02/2022, 19:37
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
import { Fragment } from 'react';

import { Gsap } from '../../helper-primitives/GsapAnimations';
import useChangeVisibilityOnScroll from '../../hooks/navigation/useChangeVisibilityOnScroll';

import { AnimationVisibility } from '../../redux/redux-dom-manipulate/types';

import {
    NavigateListenerButton, NavigateTextContentContainer, NavigationBottomBarContainer, NavigationBottomBarLine
} from './NavigationBottomBar.styles';


interface PropsProvider {
    listeners: {
        ariaLabel: string;
        goto: React.MutableRefObject<any>;
    }[];
}

const NavigationBottomBar: React.FC<PropsProvider> = ({ listeners }): JSX.Element => {

    const [ navigationRef ] = useChangeVisibilityOnScroll({ animActivate: 100, visibleType: AnimationVisibility.FLEX });

    const createListeners: JSX.Element[] = listeners.map(listener => {
        const generateAmpresand = listeners.length > 1 && listener !== listeners[listeners.length - 1] ? ' & ' : '';
        return (
            <Fragment key = {listener.ariaLabel}>
                <NavigateListenerButton
                    onClick = {() => Gsap.scrollIntoContext(listener.goto.current)}
                    title = {`Click to go to ${listener.ariaLabel}`}
                >
                    {listener.ariaLabel}
                </NavigateListenerButton>
                {generateAmpresand}
            </Fragment>
        );
    });

    return (
        <NavigationBottomBarContainer
            ref = {navigationRef}
        >
            <NavigationBottomBarLine/>
            <NavigateTextContentContainer>
                Scroll or click to view our {createListeners}
            </NavigateTextContentContainer>
        </NavigationBottomBarContainer>
    );
};

export default NavigationBottomBar;