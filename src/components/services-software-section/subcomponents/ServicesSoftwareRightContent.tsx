/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesSoftwareRightContent.tsx
 * Last modified: 12/03/2022, 13:34
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
import { useRef } from 'react';

import { ServicesTextBlocks } from '../../../static/servicesTextBlocks';
import useAnimateTextBlock from '../../../hooks/single-project/useAnimateTextBlock';
import { AllSections, ServicesSections } from '../../../redux/redux-dom-manipulate/types';

import {
    ServicesParagraphElement, ServicesRightHeaderAndParagraphContainer, ServicesSoftwareRightContentContainer
} from '../ServicesSoftwareSection.styles';

import HeaderElement from '../../universal-components/HeaderElement';


const ServicesSoftwareRightContent: React.FC = (): JSX.Element => {

    const referential = useRef<HTMLDivElement>(null);
    const { textContent } = ServicesTextBlocks.softwareBlocks;

    useAnimateTextBlock(referential, { key: AllSections.SERVICES, value: ServicesSections.TECHNICALS });

    const generateAllParagraphs: JSX.Element[] = textContent.paragraphs.map(paragraph => (
        <ServicesParagraphElement
            key = {paragraph}
        >
            {paragraph}
        </ServicesParagraphElement>
    ));

    return (
        <ServicesSoftwareRightContentContainer>
            <ServicesRightHeaderAndParagraphContainer
                ref = {referential}
            >
                <HeaderElement
                    bgcColor = 'var(--whiteClean)'
                >
                    Software
                </HeaderElement>
                {generateAllParagraphs}
            </ServicesRightHeaderAndParagraphContainer>
        </ServicesSoftwareRightContentContainer>
    );
};

export default ServicesSoftwareRightContent;