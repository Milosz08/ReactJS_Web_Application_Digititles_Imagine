/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectColoursTyposSection.tsx
 * Last modified: 10/03/2022, 17:00
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

import { Webpage } from '../../../helper-primitives/Webpage';
import { ProjectContext, ProjectContextTypes } from '../../../pages/SingleProjectPageReact';

import {
    ProjectCompositeCommaElement, ProjectCompositeSingleColour, ProjectCompositeSingleColourContainer
} from '../ProjectTechnicalsSection.styles';

import TechnicalsSpecLineWrapper from './TechnicalsSpecLineWrapper';


const ProjectColoursTyposSection: React.FC = (): JSX.Element => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);
    const { compositeColours } = findProject!.projectColours;

    const generateProjectColours = compositeColours.map(({ compositeColour }, idx) => (
        <ProjectCompositeSingleColourContainer
            key = {idx}
        >
            <ProjectCompositeSingleColour
                $bgcColour = {compositeColour}
                $forColour = {Webpage.changeColorLumination(compositeColour)}
            >
                {compositeColour}
            </ProjectCompositeSingleColour>
            {idx !== compositeColours.length - 1 && <ProjectCompositeCommaElement>,</ProjectCompositeCommaElement>}
        </ProjectCompositeSingleColourContainer>
    ));

    return (
        <TechnicalsSpecLineWrapper
            header = 'Project colours'
            content = {generateProjectColours}
        />
    );
};

export default ProjectColoursTyposSection;