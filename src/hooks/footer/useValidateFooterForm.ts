/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useValidateFooterForm.ts
 * Last modified: 19/03/2022, 11:27
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

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ReduxAPIActions } from '../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { AllFormsTypes, MessageFormInputs } from '../../redux/redux-api-thunk/types';

interface HookProps {
    typeofForm: AllFormsTypes;
}

/**
 * Custom hook responsible for validate message and registration form data.
 *
 * @param typeofForm - form type enum (message in footer or registration on getting started page).
 * @return { () => boolean } - function checking if all selected fields are valid.
 */
const useValidateFooterForm = ({ typeofForm }: HookProps): () => boolean => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const { USER_NAME, EMAIL, MESSAGE } = MessageFormInputs;
    const selectedForm = state[typeofForm];

    const dispatcher = useDispatch();

    return () => {
        let username = false, email = false, message = false;
        if (selectedForm[USER_NAME].length < 3 || selectedForm[USER_NAME].length > 30) {
            username = true;
            dispatcher(ReduxAPIActions.setErrorInFormField(typeofForm, USER_NAME, true));
        }
        if (selectedForm[EMAIL].length < 3 || !selectedForm[EMAIL].includes('@')) {
            email = true;
            dispatcher(ReduxAPIActions.setErrorInFormField(typeofForm, EMAIL, true));
        }
        if (selectedForm[MESSAGE].length < 10 || selectedForm[MESSAGE].length > 300) {
            message = true;
            dispatcher(ReduxAPIActions.setErrorInFormField(typeofForm, MESSAGE, true));
        }
        return !username && !email && !message;
    };
};

export default useValidateFooterForm;