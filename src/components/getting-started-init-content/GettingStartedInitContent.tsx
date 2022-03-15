/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GettingStartedInitContent.tsx
 * Last modified: 13/03/2022, 13:21
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

import useAnimationWaterfallOnClick from '../../hooks/getting-started/useAnimationWaterfallOnClick';

import {
    GettingStartedArrowFirst, GettingStartedArrowSecond, GettingStartedH2, GettingStartedInitContentContainer,
    GettingStartedLeftBar, GettingStartedParagraph, GettingStartedTextContainer
} from './GettingStartedInitContent.styles';

import RightNavbar from './subcomponents/RightNavbar';
import AnimateTitle from './subcomponents/AnimateTitle';


const GettingStartedInitContent: React.FC = (): JSX.Element => {

    const { elRefs, handleClickWaterfallAnimation } = useAnimationWaterfallOnClick();
    const [ textNavbar, colorNavbar, textContent ] = elRefs;

    return (
        <GettingStartedInitContentContainer>
            <RightNavbar
                referential = {textNavbar}
            />
            <GettingStartedLeftBar
                ref = {colorNavbar}
                onClick = {handleClickWaterfallAnimation}
            >
                <GettingStartedArrowFirst/>
                <GettingStartedArrowSecond/>
            </GettingStartedLeftBar>
            <GettingStartedTextContainer
                ref = {textContent}
            >
                <GettingStartedH2>
                    Choose, which service you need from: <AnimateTitle/>
                </GettingStartedH2>
                <GettingStartedParagraph>
                    To select services, your budget, and details about the service you're ordering, click the
                    rectangle on the left.
                </GettingStartedParagraph>
            </GettingStartedTextContainer>
        </GettingStartedInitContentContainer>
    );
};

export default GettingStartedInitContent;