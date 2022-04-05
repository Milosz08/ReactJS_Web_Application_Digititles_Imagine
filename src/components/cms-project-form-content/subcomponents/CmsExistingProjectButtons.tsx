/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsExistingProjectButtons.tsx
 * Last modified: 04/04/2022, 21:28
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
import { useDispatch } from 'react-redux';

import { AllModals } from '../../../redux/redux-dom-manipulate/types';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';

import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { ReduxAPIstateKeys } from '../../../redux/redux-api-thunk/types';
import { JavaApiEndpoints } from '../../../redux/redux-api-thunk/request';

import {
    CmsExistingProjectButtonsContainer, CmsExistingProjectDeleteProjectButton, CmsExistingProjectUndoChangesButton
} from '../CmsProjectFormContent.styles';


interface PropsProvider {
    projectId: string;
}

const CmsExistingProjectButtons: React.FC<PropsProvider> = ({ projectId }): JSX.Element => {

    const dispatcher = useDispatch();

    const handleRemoveSelectedProject = (): void => {
        dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.DELETE_CONTENT, true));
        dispatcher(ReduxDOMActions.insertDeleteContentData(
            projectId, ReduxAPIstateKeys.PROJECTS, JavaApiEndpoints.PROJECTS
        ));
    };

    const handleUndoInsertedChanges = (): void => {
        dispatcher(ReduxAPIActions.insertExistingProjectDataToForm(projectId));
    };

    return (
        <CmsExistingProjectButtonsContainer>
            <CmsExistingProjectUndoChangesButton
                title = 'Click to reset all insert changes'
                onClick = {handleUndoInsertedChanges}
            >
                Undo inserted changes
            </CmsExistingProjectUndoChangesButton>
            <CmsExistingProjectDeleteProjectButton
                title = '(Danger) Click to remove selected project'
                onClick = {handleRemoveSelectedProject}
            >
                (Danger) Delete Project
            </CmsExistingProjectDeleteProjectButton>
        </CmsExistingProjectButtonsContainer>
    );
};

export default CmsExistingProjectButtons;