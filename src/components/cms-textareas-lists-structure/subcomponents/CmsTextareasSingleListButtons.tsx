/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsTextareasSingleListButtons.tsx
 * Last modified: 05/04/2022, 20:58
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
import { BsTrash } from 'react-icons/bs';

import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { TextareaContext, TextareaContextTypes } from '../CmsTextareasListsStructure';

import {
    CmsParagraphButtonsContainer, CmsParagraphClearInputButton, CmsRemoveParagraphButton
} from '../CmsTextareasListsStructure.styles';

import { CmsHeaderFormRemoveButton } from '../../cms-form-list-components/CmsFormListComponent.styles';


const CmsTextareasSingleListButtons: React.FC = (): JSX.Element => {

    const { idx, section } = useContext<Partial<TextareaContextTypes>>(TextareaContext);
    const dispatcher = useDispatch();

    const handleClearInput = (): void => {
        dispatcher(ReduxAPIActions.changeProjectArrayValue(section!, idx!, ''));
    };

    const handleRemoveParagraphElement = (): void => {
        dispatcher(ReduxAPIActions.removeProjectArrayParagraphElement(section!, idx!));
    };

    return (
        <CmsParagraphButtonsContainer
            $ifFirstParagraph = {idx! === 0}
        >
            <CmsParagraphClearInputButton
                title = 'Click to clear paragraph field value'
                type = 'button'
                onClick = {handleClearInput}
            >
                <BsTrash/>
            </CmsParagraphClearInputButton>
            {idx! !== 0 && <CmsRemoveParagraphButton
                title = 'Click to remove paragraph'
                type = 'button'
                onClick = {handleRemoveParagraphElement}
            >
                <CmsHeaderFormRemoveButton/>
            </CmsRemoveParagraphButton>}
        </CmsParagraphButtonsContainer>
    );
};

export default CmsTextareasSingleListButtons;