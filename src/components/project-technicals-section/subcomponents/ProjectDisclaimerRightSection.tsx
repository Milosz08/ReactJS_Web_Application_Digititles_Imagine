/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectDisclaimerRightSection.tsx
 * Last modified: 10/03/2022, 17:29
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

import TechnicalsSpecLineWrapper from './TechnicalsSpecLineWrapper';


const ProjectDisclaimerRightSection: React.FC = (): JSX.Element => {

    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);
    const { title, prodCompany, prodYear } = findProject!;

    const content = Webpage.htmlDecodingParser(`Made purely for non-profit purposes. ${title} &copy; 
        ${prodYear} by ${prodCompany}. No infringement intended.`
    )

    return (
        <TechnicalsSpecLineWrapper
            header = 'Disclaimer'
            content = {content}
        />
    );
};

export default ProjectDisclaimerRightSection;