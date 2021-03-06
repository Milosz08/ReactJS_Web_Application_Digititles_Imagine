/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainPageAnimateTitle.tsx
 * Last modified: 25/02/2022, 01:04
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

import useChangeVisibilityOnScroll from '../../hooks/navigation/useChangeVisibilityOnScroll';
import useFixedFlickedComponentOnLoad from '../../hooks/reusable/useFixedFlickedComponentOnLoad';

import { MainPageAnimationTitleContainer } from './MainPageAnimateTitle.styles';

import MainPageAnimTitles from './subcomponents/MainPageAnimTitles';
import MainPageAnimHeader from './subcomponents/MainPageAnimHeader';


const MainPageAnimateTitle: React.MemoExoticComponent<() => JSX.Element> = React.memo((): JSX.Element => {

    const [ animationRef ] = useChangeVisibilityOnScroll({ animActivate: 700, ifNonHardHide: true });
    const hide = useFixedFlickedComponentOnLoad();

    return (
        <MainPageAnimationTitleContainer
            ref = {animationRef}
            $ifHide = {hide}
        >
            <MainPageAnimHeader/>
            <MainPageAnimTitles/>
        </MainPageAnimationTitleContainer>
    );
});

export default MainPageAnimateTitle;