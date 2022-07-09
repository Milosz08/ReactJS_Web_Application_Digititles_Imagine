/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsProjectFormContent.styles.ts
 * Last modified: 04/04/2022, 20:43
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

import styled, { css } from 'styled-components';

import { button_rs } from '../../styles/reset.styles';
import { StandardButton } from '../../styles/mixins.styles';

const ButtonMixinElement = () => css`
    ${StandardButton()};
    font-size: 1.1rem;
    @media only screen and (max-width: 830px) {
        width: 100%;
    }
`;

export const CmsProjectFormContentContainer = styled.form``;

export const CmsExistingProjectButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 30px 0;
    @media only screen and (max-width: 830px) {
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 60px;
    }
`;

export const CmsExistingProjectUndoChangesButton = styled(button_rs)`
    ${ButtonMixinElement()};
    margin-right: 30px;
    @media only screen and (max-width: 830px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const CmsExistingProjectDeleteProjectButton = styled(button_rs)`
    ${ButtonMixinElement()};
    background-color: transparent;
    border: 1px solid var(--redDark);
    color: var(--redDark);
    :hover {
        background-color: transparent;
    }
`;

export const CmsSubmitProjectButton = styled(button_rs)`
    ${ButtonMixinElement()};
    padding: 8px 0 10px;
    font-size: 1.2rem;
    margin-bottom: 40px;
    width: 100%;
`;

export const CmsServerResponseMessageContainer = styled.div<{ $ifError: boolean }>`
    color: ${({ $ifError }) => `var(--${$ifError ? 'red' : 'green'}Dark)`};
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
`;