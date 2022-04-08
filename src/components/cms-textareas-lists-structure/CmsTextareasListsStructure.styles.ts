/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsTextareasListsStructure.styles.ts
 * Last modified: 05/04/2022, 19:11
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

import styled from 'styled-components';
import Textarea from 'react-expanding-textarea';

import { button_rs, ul_rs } from '../../styles/reset.styles';
import { CmsContentBoxView, InputWithTextarea } from '../../styles/mixins.styles';

export const CmsTextareasListsStructureContainer = styled.section<{ $placeholder: string }>`
    ${({ $placeholder }) => CmsContentBoxView({ content: $placeholder })};
`;

export const CmsTextareasListsStructureUnorderedList = styled(ul_rs)``;

export const CmsTextareasListsStructureTextareaContainer = styled.li`
    margin-bottom: 20px;
`;

export const CmsTextareasListsStructureTextareaLabel = styled.div`
    position: relative;
`;

export const CmsTextareasListsStructureTextarea = styled(Textarea)<{ $ifFirstParagraph: boolean }>`
    ${({ theme }) => InputWithTextarea({ $ifError: theme.$ifError })};
    padding: 13px ${({ $ifFirstParagraph }) => $ifFirstParagraph ? 70 : 120}px 12px 13px;
    font-size: 1.2rem;
    border-bottom-width: 3px !important;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    resize: none;
`;

export const CmsTextareasListsStructureCharactersAndParagraphInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 60px);
    margin: 0 20px 10px;
    @media only screen and (max-width: 830px) {
        width: 100%;
        margin: 0 0 10px;
    }
`;

export const CmsTextareasListsStructureCharactersAndParagraphInfo = styled.span`
    display: block;
    margin-top: 5px;
    color: var(--blackLight);
    font-size: 1.2rem;
`;

export const CmsParagraphButtonsContainer = styled.div<{ $ifFirstParagraph: boolean }>`
    position: absolute;
    width: ${({ $ifFirstParagraph }) => $ifFirstParagraph ? 70 : 120}px;
    padding: 0 20px;
    right: 0;
    top: calc(50% - 3px);
    height: fit-content;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
`;

export const CmsParagraphClearInputButton = styled(button_rs)`
    padding: 5px;
    right: 15px;
    font-size: 1.5rem;
    color: var(--${({ theme }) => theme.$ifError ? 'redDark' : 'cyanDark'});
    line-height: 0;
`;

export const CmsRemoveParagraphButton = styled(CmsParagraphClearInputButton)`
    display: flex;
    align-items: center;
`;

export const CmsTextareasAddNewAreaButton = styled(button_rs)`
    border: 2px dashed var(--cyanDark);
    border-radius: 8px;
    padding: 8px 20px;
    font-size: 1.2rem;
    color: var(--cyanDark);
    width: 100%;
`;