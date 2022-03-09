/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: TechnicalBlocks.tsx
 * Last modified: 06/03/2022, 22:27
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

import { ProjectContext, ProjectContextTypes } from '../../../pages/SingleProjectPageReact';
import { TechnicalBlocksStructure, TechnicalType } from '../../../static/resolutionsAndPrograms';

import { TechnicalBlocksContainer, TechnicalBlockSingleElement } from '../ProjectInitialFluidContent.styles';


interface PropsProvider {
    type: TechnicalType;
}

const TechnicalBlocks: React.FC<PropsProvider> = ({ type }): JSX.Element => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);
    const { renderProps, usedSoftware } = findProject!;

    const findProgram = (block: string): boolean => (
        Boolean(usedSoftware.find(soft => soft.software.softwareShortName === block))
    );

    const generateAllTechnicalBlocks: JSX.Element[] = TechnicalBlocksStructure[type].map(block => (
        <TechnicalBlockSingleElement
            key = {block}
            $ifImax = {renderProps.ifImax && block === TechnicalBlocksStructure.resolutions[5]}
            $ifActive = {renderProps.shortResolution.toLocaleLowerCase() === block || findProgram(block)}
        >
            {block}
        </TechnicalBlockSingleElement>
    ));

    return (
        <TechnicalBlocksContainer>
            {generateAllTechnicalBlocks}
        </TechnicalBlocksContainer>
    );
};

export default TechnicalBlocks;