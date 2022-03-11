/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: HeaderWithParagraphSection.tsx
 * Last modified: 06/03/2022, 22:28
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
import { useContext } from 'react';

import useAnimateTextBlock from '../../../hooks/single-project/useAnimateTextBlock';

import { Webpage } from '../../../helper-primitives/Webpage';
import { SingleProjectStructureTypes } from '../../../static/singleProjectStructure';
import { ProjectContext, ProjectContextTypes } from '../../../pages/SingleProjectPageReact';

import { AllSections, ProjectSections } from '../../../redux/redux-dom-manipulate/types';

import { HeaderWithParagraphSectionContainer, ParagraphElement } from '../ProjectInitialFluidContent.styles';

import TechnicalBlocks from './TechnicalBlocks';
import HeaderElement from '../../universal-components/HeaderElement';


interface PropsProvider {
    referentialObject: React.MutableRefObject<any>;
    schema: SingleProjectStructureTypes;
    sectionKey: AllSections;
}

const HeaderWithParagraphSection: React.FC<PropsProvider> = ({
    referentialObject, schema, sectionKey
}): JSX.Element => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);

    useAnimateTextBlock(referentialObject, { key: sectionKey, value: schema.activeSection });

    const ifIsProduction = schema.activeSection === ProjectSections.PRODUCTION;
    const dotColor = ifIsProduction ? findProject?.projectColours.mainHeader : '';
    const bgcColor = ifIsProduction ? Webpage.changeColorLumination(findProject?.projectColours.mainBackground!) : '';

    const generateAllParagraphs: JSX.Element[] = findProject![schema.apiSection].map(({ paragraph }: any) => (
        <ParagraphElement
            key = {paragraph}
        >
            {paragraph}
        </ParagraphElement>
    ));

    return (
        <HeaderWithParagraphSectionContainer
            ref = {referentialObject}
        >
            <HeaderElement
                dotColor = {dotColor}
                bgcColor = {bgcColor}
            >
                {schema.header}
            </HeaderElement>
            {generateAllParagraphs}
            <TechnicalBlocks
                type = {schema.techType}
            />
        </HeaderWithParagraphSectionContainer>
    );
};

export default HeaderWithParagraphSection;