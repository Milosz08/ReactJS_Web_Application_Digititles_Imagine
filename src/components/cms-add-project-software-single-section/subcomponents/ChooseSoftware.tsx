/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ChooseSoftware.tsx
 * Last modified: 16/04/2022, 02:09
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

import {
    SoftwareContext, SoftwareContextTypes
} from '../../cms-add-project-colors-and-software-section/subcomponents/CmsAddProjectSoftwareSection';

import { ChooseSoftwareContainer } from '../CmsAddProjectSoftwareSingleSection.styles';

import ChooseSoftwareRemoveSection from './ChooseSoftwareRemoveSection';
import ChooseSoftwareSelectSoftName from './ChooseSoftwareSelectSoftName';


const ChooseSoftware: React.FC = (): JSX.Element => {

    const { iteration } = useContext<Partial<SoftwareContextTypes>>(SoftwareContext);

    return (
        <ChooseSoftwareContainer>
            <ChooseSoftwareSelectSoftName/>
            {iteration !== 0 && <ChooseSoftwareRemoveSection/>}
        </ChooseSoftwareContainer>
    );
};

export default ChooseSoftware;