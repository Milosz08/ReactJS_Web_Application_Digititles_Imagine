/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsFormExpandedButtons.tsx
 * Last modified: 02/04/2022, 18:34
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

import { FormContext, FormContextTypes } from './CmsFormListSingleElement';

import { AllModals } from '../../../redux/redux-dom-manipulate/types';
import { ReduxAPIstateKeys } from '../../../redux/redux-api-thunk/types';
import { JavaApiEndpoints } from '../../../redux/redux-api-thunk/request';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';

import {
    CmsFormExpandedPanelButtonsContainer, CmsFormExpandedPanelControlsContainer, CmsFormExpandedPanelMailtoButton,
    CmsFormExpandedPanelRemoveButton
} from '../CmsFormListComponent.styles';

import CmsMarkMessageAsViewed from './CmsMarkMessageAsViewed';


interface PropsProvider {
    endpoint: JavaApiEndpoints;
    cmsFormKey: ReduxAPIstateKeys;
    removeButtonCustomMessage?: string;
}

const CmsFormExpandedButtons: React.FC<PropsProvider> = ({ endpoint, cmsFormKey, removeButtonCustomMessage }): JSX.Element => {

    const { form } = useContext<Partial<FormContextTypes>>(FormContext);
    const dispatcher = useDispatch();

    const handleRemoveSelectedCmsForm = (): void => {
        dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.DELETE_CONTENT, true));
        dispatcher(ReduxDOMActions.insertDeleteContentData(form.id, cmsFormKey, endpoint));
    };

    return (
        <CmsFormExpandedPanelControlsContainer
            $ifEndFlexAlignment = {cmsFormKey !== ReduxAPIstateKeys.MESSAGE_FORMS}
        >
            {cmsFormKey === ReduxAPIstateKeys.MESSAGE_FORMS && <CmsMarkMessageAsViewed/>}
            <CmsFormExpandedPanelButtonsContainer>
                <CmsFormExpandedPanelMailtoButton
                    title = 'Click here to send email message'
                    href = {`mailto:${form!.email}`}
                >
                    Send email
                </CmsFormExpandedPanelMailtoButton>
                <CmsFormExpandedPanelRemoveButton
                    title = 'Click here to remove existing element'
                    onClick = {handleRemoveSelectedCmsForm}
                >
                    {removeButtonCustomMessage || 'Remove form'}
                </CmsFormExpandedPanelRemoveButton>
            </CmsFormExpandedPanelButtonsContainer>
        </CmsFormExpandedPanelControlsContainer>
    );
};

export default CmsFormExpandedButtons;