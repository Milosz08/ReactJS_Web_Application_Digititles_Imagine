/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FooterForm.styles.ts
 * Last modified: 24/02/2022, 04:31
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
import { button_rs, input_rs, textarea_rs } from '../../styles/reset.styles';
import { BasicButtonWithBottomLine, BasicTextInputElement } from '../../styles/mixins.styles';

export const FooterFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const FooterFormSubmitButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const FooterFormSubmitButton = styled(button_rs)`
    ${BasicButtonWithBottomLine({ $isLeft: false })};
`;

export const FooterFormInputElement = styled(input_rs)<{ $ifHalf?: boolean }>`
    ${BasicTextInputElement({ $ifDark: true, $ifError: false })};
    flex-basis: ${({ $ifHalf }) => $ifHalf ? '48%' : '100%'};
`;

export const FooterFormTextareaElement = styled(textarea_rs)`
    ${BasicTextInputElement({ $ifDark: true, $ifError: false })};
`;

export const FooterFormCharactersCountAndRequiredInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    width: 100%;
`;

export const FooterFormCharactersCountAndRequiredInfoSection = styled.div`
    font-size: .8rem;
    color: var(--blackLight);
`;