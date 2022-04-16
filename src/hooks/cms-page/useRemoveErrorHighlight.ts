/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useRemoveErrorHighlight.ts
 * Last modified: 03/04/2022, 13:36
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

import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    ChangeCredentialsContext, ChangeCredentialsContextTypes
} from '../../context/change-credentials-refs/ChangeCredentialsRefsProvider';

import { RootState } from '../../redux/store';
import { ReduxFormsActions } from '../../redux/redux-subreducers/redux-forms/actions';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';
import { CmsChangeCredentialsKeys, CmsCredentialsLevels } from '../../redux/redux-api-thunk/types';


interface HookReturns {
    context: Partial<ChangeCredentialsContextTypes>;
    changeCredentialsForm: {
        mode: CmsCredentialsLevels; loginError: boolean; passwordError: boolean; repeatPasswordError: boolean;
    };
    handleResetFields: (elementKey: CmsChangeCredentialsKeys) => void;
}

/**
 * Custom hook responsible for supplied function removing error on input field at change event.
 *
 * @return { HookReturns } - object with: react context referential objects, callback function and credentials errors.
 */
const useRemoveErrorHighlight = (): HookReturns => {

    const context = useContext<Partial<ChangeCredentialsContextTypes>>(ChangeCredentialsContext);
    const { changeCredentialsForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const { PASSWORD_ERROR, REPEAT_PASSWORD_ERROR } = CmsChangeCredentialsKeys;
    const dispatcher = useDispatch();

    const handleResetFields = (elementKey: CmsChangeCredentialsKeys): void => {
        dispatcher(ReduxFormsActions.changeCredentialsFormElement(elementKey, false));
        if (elementKey === PASSWORD_ERROR) {
            dispatcher(ReduxFormsActions.changeCredentialsFormElement(REPEAT_PASSWORD_ERROR, false));
        }
    };

    return { context, changeCredentialsForm, handleResetFields };
};

export default useRemoveErrorHighlight;