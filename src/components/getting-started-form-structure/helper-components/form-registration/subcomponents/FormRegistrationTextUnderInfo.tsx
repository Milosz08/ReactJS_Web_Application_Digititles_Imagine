/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormRegistrationTextUnderInfo.tsx
 * Last modified: 14/03/2022, 22:29
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

import { RootState } from '../../../../../redux/store';
import { TEXTAREA_MAX_SIGNS } from '../../../../../static/gettingStartedContent';
import { InitStateAPItypes } from '../../../../../redux/redux-api-thunk/initialState';

import { FormRegistrationDownInfoContainer, FormRegistrationDownInfoElement } from '../FormRegistration.styles';


const FormRegistrationTextUnderInfo: React.FC = (): JSX.Element => {

    const { registrationForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    return (
        <FormRegistrationDownInfoContainer>
            <FormRegistrationDownInfoElement>
                * Fields required
            </FormRegistrationDownInfoElement>
            <FormRegistrationDownInfoElement>
                {registrationForm.message.length} / {TEXTAREA_MAX_SIGNS} signs
            </FormRegistrationDownInfoElement>
        </FormRegistrationDownInfoContainer>
    );
};

export default FormRegistrationTextUnderInfo;