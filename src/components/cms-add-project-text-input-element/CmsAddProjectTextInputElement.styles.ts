/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectTextInputElement.styles.ts
 * Last modified: 04/04/2022, 20:01
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

export const CmsAddProjectTextInputElementContainer = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const CmsAddProjectTextInputTextLabel = styled.span`
    margin: 0 0 10px 20px;
    font-size: 1.2rem;
    color: var(--${({ theme }) => theme.$ifError ? 'redDark' : 'blackLight'});
`;

export const CmsAddProjectTextInput = styled(input_rs)`
    ${({ theme }) => InputWithTextarea({ $ifError: theme.$ifError })};
    padding: 11px 13px 9px;
    font-size: 1.2rem;
    border-bottom-width: 3px !important;
`;

export const CmsAddProjectClearInputButton = styled(button_rs)`
    position: absolute;
    bottom: -1px;
    padding: 5px;
    right: 15px;
    font-size: 1.5rem;
    color: var(--${({ theme }) => theme.$ifError ? 'redDark' : 'cyanDark'});
`;