/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesResSoftBlock.tsx
 * Last modified: 12/03/2022, 14:54
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

import { Webpage } from '../../helper-primitives/Webpage';
import { BlockInfoTypes } from '../../static/servicesTextBlocks';

import {
    ServicesRefSoftShortBlockAndTitle, ServicesRefSoftTitle, ServicesResSoftBlockContainer, ServicesResSoftLinkElement,
    ServicesResSoftShortBlock
} from './ServicesResSoftBlock.styles';


interface PropsProvider {
    ifDark?: boolean;
    gridBlockData: BlockInfoTypes;
}

const ServicesResSoftBlock: React.FC<PropsProvider> = ({ gridBlockData, ifDark }): JSX.Element => (
    <ThemeProvider
        theme = {{ $ifDark: ifDark }}
    >
        <ServicesResSoftBlockContainer>
            <ServicesRefSoftShortBlockAndTitle>
                <ServicesResSoftShortBlock>
                    {gridBlockData.shortName}
                </ServicesResSoftShortBlock>
                <ServicesRefSoftTitle>
                    {Webpage.htmlDecodingParser(gridBlockData.title)}
                </ServicesRefSoftTitle>
            </ServicesRefSoftShortBlockAndTitle>
            <ServicesResSoftLinkElement
                href = {ifDark ? gridBlockData.link : 'https://en.wikipedia.org/wiki/Display_resolution'}
                target = '_blank'
            >
                <span>Find more</span>
            </ServicesResSoftLinkElement>
        </ServicesResSoftBlockContainer>
    </ThemeProvider>
);

export default ServicesResSoftBlock;