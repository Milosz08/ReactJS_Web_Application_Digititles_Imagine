/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectSoftwareSection.tsx
 * Last modified: 10/04/2022, 01:43
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
import { createContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootState } from '../../../redux/store';
import { SoftwareModel } from '../../../redux/redux-models/ProjectModel';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { DiscretteProjectSections } from '../../../redux/redux-subreducers/redux-project-form/types';

import { CmsAddProjectSoftwareSectionContainer } from '../CmsAddProjectColorsAndSoftwareSection.styles';

import CmsAddProjectSoftwareSingleSection from '../../cms-add-project-software-single-section/CmsAddProjectSoftwareSingleSection';
import CmsTextareasAddNewArea from '../../cms-textareas-lists-structure/subcomponents/CmsTextareasAddNewArea';


export type SoftwareContextTypes = { soft: SoftwareModel; iteration: number; ifError: boolean };
export const SoftwareContext = createContext<Partial<SoftwareContextTypes>>({});


const CmsAddProjectSoftwareSection: React.FC = (): JSX.Element => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { projectDataForm, projectDataFormErrors } = state;

    const generateAllSections: JSX.Element[] = projectDataForm.usedSoftware.map((soft, idx) => (
        <ThemeProvider
            key = {`${soft.softwareFor}__${idx}`}
            theme = {{ $ifError: projectDataFormErrors.usedSoftware[idx] }}
        >
            <SoftwareContext.Provider
                value = {{ soft, iteration: idx, ifError: projectDataFormErrors.usedSoftware[idx] }}
            >
                <CmsAddProjectSoftwareSingleSection/>
            </SoftwareContext.Provider>
        </ThemeProvider>
    ));

    return (
        <CmsAddProjectSoftwareSectionContainer>
            {generateAllSections}
            <CmsTextareasAddNewArea
                section = {DiscretteProjectSections.SPEC_SECTION}
                addValuePayload = {{
                    softwareFor: 'titles', software: {
                        softwareFullName: 'Adobe&reg; After Effects', softwareShortName: 'ae',
                    }
                }}
            />
        </CmsAddProjectSoftwareSectionContainer>
    );
};

export default CmsAddProjectSoftwareSection;