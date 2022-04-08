/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsProjectFormContent.tsx
 * Last modified: 04/04/2022, 20:43
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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ReduxAPIActions } from '../../redux/redux-api-thunk/actions';
import { DiscretteProjectSections } from '../../redux/redux-api-thunk/types';

import { CmsProjectFormContentContainer } from './CmsProjectFormContent.styles';

import InfoBlockElement from '../info-block-element/InfoBlockElement';
import CmsExistingProjectButtons from './subcomponents/CmsExistingProjectButtons';
import CmsAddProjectBasicSection from '../cms-add-project-basic-section/CmsAddProjectBasicSection';
import CmsTextareasListsStructure from '../cms-textareas-lists-structure/CmsTextareasListsStructure';
import CmsAddProjectFontProperties from '../cms-add-project-font-properties/CmsAddProjectFontProperties';
import CmsAddProjectRenderingSection from '../cms-add-project-rendering-section/CmsAddProjectRenderingSection';


interface PropsProvider {
    loadProjectId?: string;
}

const CmsProjectFormContent: React.FC<PropsProvider> = ({ loadProjectId }): JSX.Element => {

    const dispatcher = useDispatch();

    const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('sending data to api...');
    };

    // load existing project into redux store
    useEffect(() => {
        if (loadProjectId) {
            dispatcher(ReduxAPIActions.insertExistingProjectDataToForm(loadProjectId!));
        }
        return () => {
            dispatcher(ReduxAPIActions.clearAllProjectFormElements());
        };
    }, [ dispatcher, loadProjectId ]);

    return (
        <CmsProjectFormContentContainer
            onSubmit = {handleSubmitForm}
            noValidate = {true}
        >
            {loadProjectId && <CmsExistingProjectButtons
                projectId = {loadProjectId}
            />}
            <CmsAddProjectBasicSection/>
            <InfoBlockElement
                headerTitle = 'How usage sections below this message'
            >
                In the following two sections (<i>About Project Info</i> and <i>Project Production Info</i>), you can use
                Markdown Language to create bold prints, underscores, strokes, etc. Warning! Forms do not accept
                syntax of other markup languages such as HTML or XML.
            </InfoBlockElement>
            <CmsTextareasListsStructure
                section = {DiscretteProjectSections.ABOUT_SECTION}
                headerPlaceholder = 'About project info'
            />
            <CmsTextareasListsStructure
                section = {DiscretteProjectSections.PROD_SECTION}
                headerPlaceholder = 'Project production info'
            />
            <CmsAddProjectFontProperties/>
            <CmsAddProjectRenderingSection/>
        </CmsProjectFormContentContainer>
    );
};

export default CmsProjectFormContent;