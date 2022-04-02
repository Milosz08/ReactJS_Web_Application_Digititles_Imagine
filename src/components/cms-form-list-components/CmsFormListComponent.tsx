/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsFormListComponent.tsx
 * Last modified: 02/04/2022, 18:15
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
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ReduxAPIstateKeys } from '../../redux/redux-api-thunk/types';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import { CmsListComponentContainer } from './CmsFormListComponent.styles';

import CmsFormListSingleElement from './subcomponents/CmsFormListSingleElement';


interface PropsProvider {
    typeofList: ReduxAPIstateKeys;
    children: React.ReactNode;
    headerInfoAndElement: { Info: React.FC, Header: React.FC };
}

const CmsFormListComponent: React.FC<PropsProvider> = ({ typeofList, children, headerInfoAndElement }): JSX.Element => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { Info, Header } = headerInfoAndElement;

    const selectedList = state[typeofList];

    const generateSingleListElement: JSX.Element[] = selectedList.map((form: any) => (
        <CmsFormListSingleElement
            key = {form.id}
            formElement = {form}
            typeofList = {typeofList}
            HeaderElement = {Header}
        >
            {children}
        </CmsFormListSingleElement>
    ));

    return (
        <CmsListComponentContainer>
            <Info/>
            {generateSingleListElement}
        </CmsListComponentContainer>
    );
};

export default CmsFormListComponent;