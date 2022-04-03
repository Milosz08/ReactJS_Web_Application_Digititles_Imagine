/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsChangeCredentialsFormComponent.tsx
 * Last modified: 03/04/2022, 11:17
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

import useValidateAndChangeCredentials from '../../../hooks/cms-page/useValidateAndChangeCredentials';

import { CmsChangeCredentialsForm } from '../CmsChangeCredentials.styles';

import HeaderElement from '../../universal-components/HeaderElement';
import CmsRadioInputsForChangeTypeofAccount from './CmsRadioInputsForChangeTypeofAccount';
import CmsChangeCredentialsInputs from './CmsChangeCredentialsInputs';


const CmsChangeCredentialsFormComponent: React.FC = (): JSX.Element => {

    const handleFormOnSubmit = useValidateAndChangeCredentials();

    return (
        <CmsChangeCredentialsForm
            noValidate = {true}
            onSubmit = {handleFormOnSubmit}
        >
            <HeaderElement
                fontSize = '3rem'
                ifRemoveMargin = {true}
            >
                Credentials Form
            </HeaderElement>
            <CmsRadioInputsForChangeTypeofAccount/>
            <CmsChangeCredentialsInputs/>
        </CmsChangeCredentialsForm>
    );
};

export default CmsChangeCredentialsFormComponent;