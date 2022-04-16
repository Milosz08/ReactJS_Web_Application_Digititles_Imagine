/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsTextareasSingleListStructure.tsx
 * Last modified: 05/04/2022, 19:51
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
import { useDispatch } from 'react-redux';

import { TextareaContext, TextareaContextTypes } from '../CmsTextareasListsStructure';
import { ReduxProjFormActions } from '../../../redux/redux-subreducers/redux-project-form/actions';

import {
    CmsTextareasListsStructureTextarea, CmsTextareasListsStructureTextareaContainer, CmsTextareasListsStructureTextareaLabel
} from '../CmsTextareasListsStructure.styles';

import CmsTextareasSingleListCharactersInfo from './CmsTextareasSingleListCharactersInfo';
import CmsTextareasSingleListButtons from './CmsTextareasSingleListButtons';


const CmsTextareasSingleListStructure: React.FC = (): JSX.Element => {

    const { textarea, idx, section, headerPlaceholder } = useContext<Partial<TextareaContextTypes>>(TextareaContext);
    const dispatcher = useDispatch();

    const handleChangeParagraphValue = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
        dispatcher(ReduxProjFormActions.changeProjectArrayValue(section!, idx!, target.value));
    };

    return (
        <CmsTextareasListsStructureTextareaContainer>
            <CmsTextareasSingleListCharactersInfo/>
            <CmsTextareasListsStructureTextareaLabel>
                <CmsTextareasListsStructureTextarea
                    placeholder = {`Insert here ${headerPlaceholder!.toLocaleLowerCase()}`}
                    value = {textarea!}
                    onChange = {handleChangeParagraphValue}
                    maxLength = {MAX_TEXTAREA_CHARS}
                    $ifFirstParagraph = {idx! === 0}
                />
                <CmsTextareasSingleListButtons/>
            </CmsTextareasListsStructureTextareaLabel>
        </CmsTextareasListsStructureTextareaContainer>
    );
};

export const MAX_TEXTAREA_CHARS = 500;

export default CmsTextareasSingleListStructure;