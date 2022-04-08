/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsMarkMessageAsViewed.tsx
 * Last modified: 08/04/2022, 01:54
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

import { RootState } from '../../../redux/store';
import { ReduxAPIThunk } from '../../../redux/redux-api-thunk/thunk';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import { FormContext, FormContextTypes } from './CmsFormListSingleElement';

import UniversalCheckboxInputComponent from '../../universal-checkbox-input-component/UniversalCheckboxInputComponent';


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
        <UniversalCheckboxInputComponent
            checkedValue = {Boolean(findExactMessageForm.ifViewed)}
            htmlForId = {form.id}
            ifDisabled = {findExactMessageForm.ifViewed}
            onChangeCallback = {handleViewedUserMessage}
            checkboxMessage = 'Mark this message as viewed'
        />
    );
};

export default CmsMarkMessageAsViewed;