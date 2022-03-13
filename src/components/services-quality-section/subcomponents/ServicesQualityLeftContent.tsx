/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesQualityLeftContent.tsx
 * Last modified: 12/03/2022, 14:06
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

import { Webpage } from '../../../helper-primitives/Webpage';
import { ServicesTextBlocks } from '../../../static/servicesTextBlocks';
import useAnimateTextBlock from '../../../hooks/single-project/useAnimateTextBlock';
import { AllSections, ServicesSections } from '../../../redux/redux-dom-manipulate/types';

import {
    ServicesQualityLeftContentContainer, ServicesQualityParagraphElement, ServicesQualityUnorderedList,
    ServicesQualityUnorderedListElement
} from '../ServicesQualitySection.styles';
import { ServicesRightHeaderAndParagraphContainer } from '../../services-software-section/ServicesSoftwareSection.styles';

import HeaderElement from '../../universal-components/HeaderElement';


const ServicesQualityLeftContent: React.FC = (): JSX.Element => {

    const referential = useRef<HTMLDivElement>(null);
    const addtlnParent = useRef<HTMLUListElement>(null);

    const { textContent } = ServicesTextBlocks.qualityBlocks;

    useAnimateTextBlock(referential, {
        key: AllSections.SERVICES, value: ServicesSections.TECHNICALS
    }, addtlnParent);

    const generateAllListElement: JSX.Element[] = textContent.list.map(({ header, description }) => (
        <ServicesQualityUnorderedListElement
            key = {description}
        >
            <strong>{Webpage.htmlDecodingParser(header)}</strong> - {Webpage.htmlDecodingParser(description)}
        </ServicesQualityUnorderedListElement>
    ));

    return (
        <ServicesQualityLeftContentContainer>
            <ServicesRightHeaderAndParagraphContainer
                ref = {referential}
            >
                <HeaderElement>
                    Quality
                </HeaderElement>
                <ServicesQualityParagraphElement>
                    We make main credits as well as end credits in many popular resolutions. From standard to top
                    quality 8K. Among the render resolutions we offer are:
                </ServicesQualityParagraphElement>
                <ServicesQualityUnorderedList
                    ref = {addtlnParent}
                >
                    {generateAllListElement}
                </ServicesQualityUnorderedList>
            </ServicesRightHeaderAndParagraphContainer>
        </ServicesQualityLeftContentContainer>
    );
};

export default ServicesQualityLeftContent;