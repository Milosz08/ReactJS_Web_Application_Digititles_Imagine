/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesLeftContentElements.tsx
 * Last modified: 07/03/2022, 02:14
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

import { ServicesTextBlocks } from '../../../static/servicesTextBlocks';

import { ServicesLeftContentElementsContainer } from '../ServicesInitialFluidContent.styles';

import ServicesLeftContentSingleBlockElement from './ServicesLeftContentSingleBlockElement';


interface PropsProvider {
    referentialObject: React.MutableRefObject<any>;
}

const ServicesLeftContentElements: React.FC<PropsProvider> = ({ referentialObject }): JSX.Element => {

    const generateAllInfoBlocks: JSX.Element[] = ServicesTextBlocks.initialBlocks.map(block => (
        <ServicesLeftContentSingleBlockElement
            key = {block.header}
            content = {block}
        />
    ));

    return (
        <ServicesLeftContentElementsContainer
            ref = {referentialObject}
        >
            {generateAllInfoBlocks}
        </ServicesLeftContentElementsContainer>
    );
};

export default ServicesLeftContentElements;