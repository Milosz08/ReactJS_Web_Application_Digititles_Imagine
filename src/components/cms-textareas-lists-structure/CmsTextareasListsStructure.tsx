/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsTextareasListsStructure.tsx
 * Last modified: 05/04/2022, 18:50
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

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { DiscretteProjectSections } from '../../redux/redux-subreducers/redux-project-form/types';

import {
    CmsTextareasListsStructureContainer, CmsTextareasListsStructureUnorderedList
} from './CmsTextareasListsStructure.styles';

import CmsTextareasSingleListStructure from './subcomponents/CmsTextareasSingleListStructure';
import CmsTextareasAddNewArea from './subcomponents/CmsTextareasAddNewArea';


export interface TextareaContextTypes extends PropsProvider { textarea: string | any, idx: number }
export const TextareaContext = createContext<Partial<TextareaContextTypes>>({});

interface PropsProvider {
    section: DiscretteProjectSections;
    headerPlaceholder: string;
}

const CmsTextareasListsStructure: React.FC<PropsProvider> = ({ section, headerPlaceholder }): JSX.Element => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { projectDataForm, projectDataFormErrors } = state;

    const generateAllTextareasStructure: JSX.Element[] = projectDataForm[section].map((textarea, idx) => (
        <ThemeProvider
            key = {idx}
            theme = {{ $ifError: projectDataFormErrors[section][idx] }}
        >
            <TextareaContext.Provider
                value = {{ textarea, section, headerPlaceholder, idx }}
            >
                <CmsTextareasSingleListStructure/>
            </TextareaContext.Provider>
        </ThemeProvider>
    ));

    return (
        <CmsTextareasListsStructureContainer
            $placeholder = {headerPlaceholder}
        >
            <CmsTextareasListsStructureUnorderedList>
                {generateAllTextareasStructure}
            </CmsTextareasListsStructureUnorderedList>
            <CmsTextareasAddNewArea
                section = {section}
            />
        </CmsTextareasListsStructureContainer>
    );
};

export default CmsTextareasListsStructure;