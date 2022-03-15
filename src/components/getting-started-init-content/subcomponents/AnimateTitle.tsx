/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: AnimateTitle.tsx
 * Last modified: 13/03/2022, 14:55
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
import { gsap } from 'gsap';

import useSingleRowGroupAnimation from '../../../hooks/main-page-title-animation/useSingleRowGroupAnimation';

import {
    GettingStartedAnimatedTitleContainer, GettingStartedSingleRowTitle, GettingStartedTitleCharContainer,
    GettingStartedTitleDot
} from '../GettingStartedInitContent.styles';


const AnimateTitle: React.MemoExoticComponent<() => JSX.Element> = React.memo((): JSX.Element => {

    const gsapTimeline = gsap.timeline({ repeat: -1, delay: 1 });
    const [ allRefs, elements ] = useSingleRowGroupAnimation({ groupPos: null, gsapTimeline, ifIsSingleTitle: true });

    const generateAllChars = (title: string): JSX.Element[] => {
        return title.split('').map(char => (
            <GettingStartedTitleCharContainer
                key = {Array.from({ length: 5 }).map(() => Math.floor(Math.random() * 256).toString(16)).toString()}
            >
                {char}
            </GettingStartedTitleCharContainer>
        ));
    };

    const generateCharsStructure: JSX.Element[] = elements.map((row, idx) => (
        <GettingStartedSingleRowTitle
            key = {row}
            ref = {allRefs[idx]}
        >
            {generateAllChars(row)}<GettingStartedTitleDot>.</GettingStartedTitleDot>
        </GettingStartedSingleRowTitle>
    ));

    return (
        <GettingStartedAnimatedTitleContainer>
            {generateCharsStructure}
        </GettingStartedAnimatedTitleContainer>
    );
});

export default AnimateTitle;