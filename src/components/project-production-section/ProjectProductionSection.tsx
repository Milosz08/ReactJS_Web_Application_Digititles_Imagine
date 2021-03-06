/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectProductionSection.tsx
 * Last modified: 07/03/2022, 01:13
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
import { ThemeProvider } from 'styled-components';

import { ProjectContext, ProjectContextTypes } from '../../pages/SingleProjectPageReact';

import { ProjectProductionSectionContainer } from './ProjectProductionSection.styles';

import ProjectProductionSectionLeftContent from './subcomponents/ProjectProductionSectionLeftContent';
import ProjectProductionSectionRightContent from './subcomponents/ProjectProductionSectionRightContent';


interface PropsProvider {
    referential: React.MutableRefObject<any>;
}

const ProjectProductionSection: React.FC<PropsProvider> = ({ referential }): JSX.Element => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);

    return (
        <ThemeProvider
            theme = {{ $colours: findProject?.projectColours }}
        >
            <ProjectProductionSectionContainer
                ref = {referential}
            >
                <ProjectProductionSectionLeftContent/>
                <ProjectProductionSectionRightContent/>
            </ProjectProductionSectionContainer>
        </ThemeProvider>
    );
};

export default ProjectProductionSection;