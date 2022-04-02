/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsMarkMessageAsViewed.tsx
 * Last modified: 02/04/2022, 20:32
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
import { ThemeProvider } from 'styled-components';

import { RootState } from '../../redux/store';
import { ReduxAPIThunk } from '../../redux/redux-api-thunk/thunk';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import { FormContext, FormContextTypes } from '../cms-form-list-components/subcomponents/CmsFormListSingleElement';

import {
    CmsMarkMessageAsViewedCheckboxInput, CmsMarkMessageAsViewedCheckmark, CmsMarkMessageAsViewedContainer,
    CmsMarkMessageAsViewedLabelText
} from './CmsMarkMessageAsViewed.styles';


const CmsMarkMessageAsViewed: React.FC = (): JSX.Element => {

    const { messageForms, sessionInfo }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { form } = useContext<Partial<FormContextTypes>>(FormContext);

    const findExactMessageForm = messageForms.find(messageForm => messageForm.id === form.id)!;
    const dispatcher = useDispatch();

    const handleViewedUserMessage = (): void => {
        if (!Boolean(findExactMessageForm.ifViewed)) {
            dispatcher(ReduxAPIThunk.markUserMessageAsViewed(findExactMessageForm.id!, {
                Authorization: sessionInfo.bearerToken
            }));
        }
    };

    return (
        <ThemeProvider
            theme = {{ $ifDisabled: Boolean(findExactMessageForm.ifViewed) }}
        >
            <CmsMarkMessageAsViewedContainer
                htmlFor = 'mark-as-viewed'
            >
                <CmsMarkMessageAsViewedCheckboxInput
                    type = 'checkbox'
                    id = 'mark-as-viewed'
                    checked = {Boolean(findExactMessageForm.ifViewed)}
                    onChange = {handleViewedUserMessage}
                    disabled = {Boolean(findExactMessageForm.ifViewed)}
                />
                <CmsMarkMessageAsViewedCheckmark/>
                <CmsMarkMessageAsViewedLabelText>
                    Mark this message as viewed
                </CmsMarkMessageAsViewedLabelText>
            </CmsMarkMessageAsViewedContainer>
        </ThemeProvider>
    );
};

export default CmsMarkMessageAsViewed;