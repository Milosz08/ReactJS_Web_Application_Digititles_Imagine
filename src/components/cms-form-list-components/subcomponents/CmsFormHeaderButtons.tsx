/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsFormHeaderButtons.tsx
 * Last modified: 02/04/2022, 18:48
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
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import { FormContext, FormContextTypes } from './CmsFormListSingleElement';

import { RootState } from '../../../redux/store';
import { AllModals } from '../../../redux/redux-dom-manipulate/types';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';

import { ReduxAPIstateKeys } from '../../../redux/redux-api-thunk/types';
import { JavaApiEndpoints } from '../../../redux/redux-api-thunk/request';

import {
    CmsHeaderFormButton, CmsHeaderFormButtonsContainer, CmsHeaderFormRemoveButton
} from '../CmsFormListComponent.styles';


interface PropsProvider {
    typeofFormKey: ReduxAPIstateKeys;
    endpoint: JavaApiEndpoints;
}

const CmsFormHeaderButtons: React.FC<PropsProvider> = ({ typeofFormKey, endpoint }): JSX.Element => {

    const { formActiveElements }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { form, active } = useContext<Partial<FormContextTypes>>(FormContext);

    const dispatcher = useDispatch();

    const handleRemoveCmsForm = (): void => {
        dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.DELETE_CONTENT, true));
        dispatcher(ReduxDOMActions.insertDeleteContentData(form.id, typeofFormKey, endpoint));
    };

    const handleOpenExtendedPanel = (): void => {
        if (formActiveElements[active] === form!.id) {
            dispatcher(ReduxDOMActions.changeCmsActiveFormElement(active, null));
        } else {
            dispatcher(ReduxDOMActions.changeCmsActiveFormElement(active, form?.id));
        }
    };

    return (
        <CmsHeaderFormButtonsContainer
            $flexBasisValue = {10}
        >
            <CmsHeaderFormButton
                title = 'Click here to open extended panel'
                onClick = {handleOpenExtendedPanel}
            >
                {formActiveElements[active] === form!.id ? <FiArrowUp/> : <FiArrowDown/>}
            </CmsHeaderFormButton>
            <CmsHeaderFormButton
                title = 'Click here to remove existing form'
                onClick = {handleRemoveCmsForm}
            >
                <CmsHeaderFormRemoveButton/>
            </CmsHeaderFormButton>
        </CmsHeaderFormButtonsContainer>
    );
};

export default CmsFormHeaderButtons;