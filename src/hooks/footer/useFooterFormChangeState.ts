/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useFooterFormChangeState.ts
 * Last modified: 19/03/2022, 13:19
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

import { ReduxFormsActions } from '../../redux/redux-subreducers/redux-forms/actions';
import { AllFormsTypes, MessageFormInputs } from '../../redux/redux-subreducers/redux-forms/types';

type ReturnedFunc = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;


/**
 * Custom hook responsible for setting state based change event handler function.
 */
const useFooterFormChangeState = (): ReturnedFunc => {

    const dispatcher = useDispatch();

    return ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        dispatcher(ReduxFormsActions.setErrorInFormField(AllFormsTypes.MESSAGE, target.id as MessageFormInputs, false));
        dispatcher(ReduxFormsActions.setFieldInMessageForm(target.id as MessageFormInputs, target.value));
    };
};

export default useFooterFormChangeState;