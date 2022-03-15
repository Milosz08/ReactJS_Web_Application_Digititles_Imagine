/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainPageAnimSingleRowGroup.tsx
 * Last modified: 25/02/2022, 02:55
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

import { Position } from '../../../static/animTitlesObject';
import useSingleRowGroupAnimation from '../../../hooks/main-page-title-animation/useSingleRowGroupAnimation';

import {
    DotContainer, MainPageAnimationTitlesSingleRowGroup, TitlesSingleTitleCharContainer, TitlesSingleTitleInRow
} from '../MainPageAnimateTitle.styles';


interface PropsProvider {
    groupPos: Position;
    gsapTimeline: gsap.core.Timeline;
}

const MainPageAnimSingleRowGroup: React.FC<PropsProvider> = ({ groupPos, gsapTimeline }): JSX.Element => {

    const [ allRefs, elements ] = useSingleRowGroupAnimation({ groupPos, gsapTimeline });

    const generateAllChars = (title: string): JSX.Element[] => {
        return title.split('').map(char => (
            <TitlesSingleTitleCharContainer
                key = {Array.from({ length: 5 }).map(() => Math.floor(Math.random() * 256).toString(16)).toString()}
            >
                {char}
            </TitlesSingleTitleCharContainer>
        ));
    };

    const generateCharsStructure: JSX.Element[] = elements.map((row, idx) => (
        <TitlesSingleTitleInRow
            key = {row}
            ref = {allRefs[idx]}
        >
            {generateAllChars(row)}
            {groupPos === Position.BOTTOM && <DotContainer>.</DotContainer>}
        </TitlesSingleTitleInRow>
    ));

    return (
        <MainPageAnimationTitlesSingleRowGroup>
            {generateCharsStructure}
        </MainPageAnimationTitlesSingleRowGroup>
    );
};

export default MainPageAnimSingleRowGroup;