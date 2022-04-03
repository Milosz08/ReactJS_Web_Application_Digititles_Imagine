/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsRadioInputsForChangeTypeofAccount.tsx
 * Last modified: 03/04/2022, 11:28
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
import { useDispatch, useSelector } from 'react-redux';

import { Webpage } from '../../../helper-primitives/Webpage';

import { RootState } from '../../../redux/store';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { CmsChangeCredentialsKeys, CmsCredentialsLevels } from '../../../redux/redux-api-thunk/types';

import { CmsRadioInputsForChangeTypeofAccountContainer } from '../CmsChangeCredentials.styles';

import UniversalRadioInputComponent from '../../universal-radio-button-component/UniversalRadioInputComponent';


const CmsRadioInputsForChangeTypeofAccount: React.FC = (): JSX.Element => {

    const { changeCredentialsForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const dispatcher = useDispatch();

    const handleChangeCredentialsFormLevel = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatcher(ReduxAPIActions.changeCredentialsFormElement(
            CmsChangeCredentialsKeys.MODE, CmsCredentialsLevels[target.id]
        ));
    };

    const generateChangeCredentialsRadioInputs: JSX.Element[] = Object.keys(CmsCredentialsLevels)
        .filter(key => key !== CmsCredentialsLevels.UNDEFINED).map(key => (
            <UniversalRadioInputComponent
                key = {key}
                htmlLabel = {key}
                labelDescription = {`Change for ${Webpage.capitalisedWord(CmsCredentialsLevels[key])}`}
                htmlGroupName = 'change-credentials'
                checkedValue = {changeCredentialsForm.mode === CmsCredentialsLevels[key]}
                onChangeListener = {handleChangeCredentialsFormLevel}
            />
        ));

    return (
        <CmsRadioInputsForChangeTypeofAccountContainer>
            {generateChangeCredentialsRadioInputs}
        </CmsRadioInputsForChangeTypeofAccountContainer>
    );
};

export default CmsRadioInputsForChangeTypeofAccount;