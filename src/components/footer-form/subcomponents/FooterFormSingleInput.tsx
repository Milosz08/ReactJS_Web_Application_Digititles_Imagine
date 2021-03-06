/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FooterFormSingleInput.tsx
 * Last modified: 19/03/2022, 11:01
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

import useFooterFormChangeState from '../../../hooks/footer/useFooterFormChangeState';

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { MessageFormInputs, MessageFormInputsPlaceholders } from '../../../redux/redux-subreducers/redux-forms/types';

import { FooterFormInputElement, FooterFormLabelElement } from '../FooterForm.styles';


interface PropsProvider {
    elementKey: MessageFormInputs;
    ifHalfLabelSize?: boolean;
}

const FooterFormSingleInput: React.FC<PropsProvider> = ({ elementKey, ifHalfLabelSize }): JSX.Element => {

    const { messageForm, messageFormErrors }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const handleChangeSingleProperty = useFooterFormChangeState();

    return (
        <FooterFormLabelElement
            htmlFor = {elementKey}
            $ifHalf = {Boolean(ifHalfLabelSize)}
        >
            <FooterFormInputElement
                type = 'text'
                id = {elementKey}
                value = {messageForm[elementKey]}
                onChange = {handleChangeSingleProperty}
                placeholder = {MessageFormInputsPlaceholders[elementKey]}
                $ifError = {messageFormErrors[elementKey]}
            />
        </FooterFormLabelElement>
    );
};

export default FooterFormSingleInput;