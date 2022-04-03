/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsChangeCredentials.styles.ts
 * Last modified: 03/04/2022, 11:03
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

import styled from 'styled-components';
import { button_rs } from '../../styles/reset.styles';
import { StandardButton } from '../../styles/mixins.styles';

export const CmsChangeCredentialsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--${({ theme }) => theme.$ifFormDisabled ? 'redDark' : 'grayDark'});
    border-radius: 8px;
    padding: 30px 0;
    margin-bottom: 100px;
    ::after {
        display: ${({ theme }) => theme.$ifFormDisabled ? 'block' : 'none'};
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .7;
        background-color: var(--whiteClean);
        border-radius: 8px;
    }
`;

export const CmsChangeCredentialsAuthLevelInfo = styled.p`
    position: relative;
    z-index: 1;
    color: var(--redDark);
    margin-bottom: 40px;
    font-size: 1.2rem;
`;

export const CmsChangeCredentialsForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CmsChangeCredentialsFormInputsContainer = styled.div`
    max-width: 360px;
`;

export const CmsRadioInputsForChangeTypeofAccountContainer = styled.div`
    display: flex;
    margin: 30px 0;
`;

export const CmsChangeCredentialsSubmitButton = styled(button_rs)`
    ${StandardButton()};
    width: 100%;
    font-size: 1.2rem;
    margin-top: 10px;
`;