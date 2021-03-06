/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesSoftwareLeftContent.tsx
 * Last modified: 12/03/2022, 13:33
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
import useAnimateInfoBlocks from '../../../hooks/services/useAnimateInfoBlocks';

import { ServicesSoftwareLeftContentContainer } from '../ServicesSoftwareSection.styles';

import ServicesResSoftBlock from '../../services-res-soft-block/ServicesResSoftBlock';


const ServicesSoftwareLeftContent: React.FC = (): JSX.Element => {

    const { infoBlocksContent } = ServicesTextBlocks.softwareBlocks;
    const parentElement = useAnimateInfoBlocks();

    const generateSoftwareGridBlocks: JSX.Element[] = infoBlocksContent.map(blockContent => (
        <ServicesResSoftBlock
            key = {blockContent.title}
            gridBlockData = {blockContent}
            ifDark = {true}
        />
    ));

    return (
        <ServicesSoftwareLeftContentContainer
            ref = {parentElement}
        >
            {generateSoftwareGridBlocks}
        </ServicesSoftwareLeftContentContainer>
    );
};

export default ServicesSoftwareLeftContent;