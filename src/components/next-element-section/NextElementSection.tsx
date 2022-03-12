/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: NextElementSection.tsx
 * Last modified: 07/03/2022, 01:19
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
import { ThemeProvider } from 'styled-components';

import { NextElementPropTypes } from '../../static/nextElementProps';

import {
    NextElementLeftContent, NextElementLeftContentAside, NextElementLeftContentHeader, NextElementRightArrowContainer,
    NextElementRightArrowElement, NextElementSectionContainer
} from './NextElementSection.styles';


interface PropsProvider {
    content: NextElementPropTypes;
    ifWhite?: boolean;
}

const NextElementSection: React.FC<PropsProvider> = ({ content, ifWhite }): JSX.Element => {

    const defDotColor = `var(--${ifWhite ? 'cyanDark' : 'cyanLight'})`;

    const generateArrows: JSX.Element[] = Array.from({ length: 3 }, (v, i) => i).map(idx => (
        <NextElementRightArrowElement
            key = {idx}
            $extraDelay = {idx}
        />
    ));

    return (
        <ThemeProvider
            theme = {{ $ifWhite: Boolean(ifWhite), $projectDotColor: content.dotColor || defDotColor}}
        >
            <NextElementSectionContainer
                to = {content.pathTo!}
            >
                <NextElementLeftContent>
                    <NextElementLeftContentHeader>
                        {content.header}
                    </NextElementLeftContentHeader>
                    <NextElementLeftContentAside>
                        {content.aside}
                    </NextElementLeftContentAside>
                </NextElementLeftContent>
                <NextElementRightArrowContainer>
                    {generateArrows}
                </NextElementRightArrowContainer>
            </NextElementSectionContainer>
        </ThemeProvider>
    );
};

export default NextElementSection;