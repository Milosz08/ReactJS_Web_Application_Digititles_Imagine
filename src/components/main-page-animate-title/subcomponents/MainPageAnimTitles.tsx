/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainPageAnimTitles.tsx
 * Last modified: 25/02/2022, 02:51
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

import { MainPageAnimTitlesObject } from '../../../static/animTitlesObject';
import useGenerateGsapTimelines from '../../../hooks/main-page-title-animation/useGenerateGsapTimelines';

import { MainPageAnimationTitlesContainer } from '../MainPageAnimateTitle.styles';

import MainPageAnimSingleRowGroup from './MainPageAnimSingleRowGroup';


const MainPageAnimTitles: React.MemoExoticComponent<() => JSX.Element> = React.memo((): JSX.Element => {

    const { grabber, titleRefs } = useGenerateGsapTimelines();

    const generateAllTitlesStructure = MainPageAnimTitlesObject.map((title, idx) => (
        <MainPageAnimSingleRowGroup
            key = {title.ariaLabel}
            groupPos = {title.ariaLabel}
            gsapTimeline = {titleRefs[idx]}
        />
    ));

    return (
        <MainPageAnimationTitlesContainer
            ref = {grabber}
        >
            {generateAllTitlesStructure}
        </MainPageAnimationTitlesContainer>
    );
});

export default MainPageAnimTitles;