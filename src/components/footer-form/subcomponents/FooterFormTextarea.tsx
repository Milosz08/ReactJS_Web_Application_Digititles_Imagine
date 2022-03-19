/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FooterFormTextarea.tsx
 * Last modified: 24/02/2022, 19:37
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
import { MessageFormInputs, MessageFormInputsPlaceholders } from '../../../redux/redux-api-thunk/types';

import {
    FooterFormCharactersCountAndRequiredInfo, FooterFormCharactersCountAndRequiredInfoSection, FooterFormLabelElement,
    FooterFormTextareaElement
} from '../FooterForm.styles';


const FooterFormTextarea: React.FC = (): JSX.Element => {

    const { messageForm, messageFormErrors }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const handleChangeSingleProperty = useFooterFormChangeState();

    return (
        <FooterFormLabelElement
            htmlFor = {MessageFormInputs.MESSAGE}
        >
            <FooterFormTextareaElement
                id = {MessageFormInputs.MESSAGE}
                value = {messageForm.message}
                onChange = {handleChangeSingleProperty}
                rows = {4}
                placeholder = {MessageFormInputsPlaceholders.message}
                minLength = {MIN_AREA_LENGTH}
                maxLength = {MAX_AREA_LENGTH}
                $ifError = {messageFormErrors.message}
            />
            <FooterFormCharactersCountAndRequiredInfo>
                <FooterFormCharactersCountAndRequiredInfoSection>
                    * Fields required
                </FooterFormCharactersCountAndRequiredInfoSection>
                <FooterFormCharactersCountAndRequiredInfoSection>
                    {messageForm.message.length} / {MAX_AREA_LENGTH}
                </FooterFormCharactersCountAndRequiredInfoSection>
            </FooterFormCharactersCountAndRequiredInfo>
        </FooterFormLabelElement>
    );
};

/**
 * Constants that define the minimum and maximum number of characters that can be
 * entered into a text field.
 */
export const MAX_AREA_LENGTH: number = 200;
export const MIN_AREA_LENGTH: number = 10;

export default FooterFormTextarea;
