/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectSoftwareSingleSection.styles.ts
 * Last modified: 15/04/2022, 19:03
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

import { button_rs, input_rs } from '../../styles/reset.styles';
import { InputWithTextarea } from '../../styles/mixins.styles';

export const CmsAddProjectSoftwareSingleSectionContainer = styled.div`
    margin-bottom: 30px;
`;

export const ChooseSoftwareForContainer = styled.div`
    display: flex;
    align-items: flex-end;
    @media only screen and (max-width: 840px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ChooseSoftwareForTextInputLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    @media only screen and (max-width: 840px) {
        flex-grow: initial;
        width: 100%;
    }
`;

export const ChooseSoftwareForTextInput = styled(input_rs)`
    ${({ theme }) => InputWithTextarea({ $ifError: theme.$ifError })};
    padding: 11px 13px 9px;
    font-size: 1.2rem;
    border-bottom-width: 3px !important;
    max-height: 44px;
    :disabled {
        opacity: .5;
        cursor: not-allowed;
    }
`;

export const ChooseSoftwareToggleButton = styled(button_rs)`
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--${({ theme }) => theme.$ifError ? 'redDark' : 'cyanDark'});
    margin: 0 20px;
    color: var(--whiteClean);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 840px) {
        margin: 15px 0;
        width: 100%;
    }
`;

export const ChooseSoftwareContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const ChooseSoftwareRemoveSectionButton = styled(button_rs)`
    position: relative;
    width: 44px;
    height: 44px;
    align-self: flex-end;
    margin-left: 20px;
    display: flex;
    align-items: center;
`;