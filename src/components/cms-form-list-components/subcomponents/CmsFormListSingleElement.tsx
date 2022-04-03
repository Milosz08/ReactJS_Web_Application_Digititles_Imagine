/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsFormListSingleElement.tsx
 * Last modified: 02/04/2022, 18:22
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
import { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDidMount from '../../../hooks/reusable/useDidMount';

import { RootState } from '../../../redux/store';
import { ReduxAPIstateKeys } from '../../../redux/redux-api-thunk/types';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { MessagesFormTypes, RegistrationFormTypes } from '../../../redux/redux-api-thunk/elementTypes';

import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';

import {
    CmsFormDataSeparator, CmsFormExpandedDataContainer, CmsFormSingleElementContainer
} from '../CmsFormListComponent.styles';


export type FormContextTypes =  { form: RegistrationFormTypes | MessagesFormTypes | any, active: any };
export const FormContext = createContext<Partial<FormContextTypes>>({});

interface PropsProvider {
    formElement: RegistrationFormTypes | MessagesFormTypes | any;
    typeofList: ReduxAPIstateKeys;
    HeaderElement: React.FC;
    children: React.ReactNode;
}

const CmsFormListSingleElement: React.FC<PropsProvider> = ({ formElement, typeofList, HeaderElement, children })
    : JSX.Element => {

    const { formActiveElements }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    
    const activeForm = formActiveElements[typeofList + 'ActiveSection'];
    const dispatcher = useDispatch();
    const isMount = useDidMount();

    useEffect(() => {
        if (isMount) {
            dispatcher(ReduxDOMActions.changeCmsActiveFormElement(typeofList + 'ActiveSection', state[typeofList][0].id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isMount, dispatcher ]);

    return (
        <CmsFormSingleElementContainer
            $ifShowExtraContent = {activeForm === formElement.id}
        >
            <FormContext.Provider
                value = {{ form: formElement, active: typeofList + 'ActiveSection' }}
            >
                <HeaderElement/>
                <CmsFormDataSeparator/>
                <CmsFormExpandedDataContainer>
                    {children}
                </CmsFormExpandedDataContainer>
            </FormContext.Provider>
        </CmsFormSingleElementContainer>
    );
};

export default CmsFormListSingleElement;