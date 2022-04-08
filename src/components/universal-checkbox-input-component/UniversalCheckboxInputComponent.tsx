/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: UniversalCheckboxInputComponent.tsx
 * Last modified: 08/04/2022, 01:39
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
import ReactMarkdown from 'react-markdown';
import { ThemeProvider } from 'styled-components';

import {
    UniversalCheckboxInputCheckmark, UniversalCheckboxInputContainer, UniversalCheckboxInputElement,
    UniversalCheckboxInputLabelText
} from './UniversalCheckboxInputComponent.styles';


interface PropsProvider {
    ifDisabled?: boolean;
    checkedValue: boolean;
    htmlForId: string | any;
    onChangeCallback: () => void;
    checkboxMessage: string;
    ifProjectImax?: boolean;
}

const UniversalCheckboxInputComponent: React.FC<PropsProvider> = ({
    ifDisabled, checkedValue, htmlForId, onChangeCallback, checkboxMessage, ifProjectImax
}): JSX.Element => (
    <ThemeProvider
        theme = {{ $ifDisabled: Boolean(ifDisabled), $ifProjectImax: ifProjectImax }}
    >
        <UniversalCheckboxInputContainer
            htmlFor = {`mark-as-viewed__${htmlForId}`}
        >
            <UniversalCheckboxInputElement
                type = 'checkbox'
                id = {`mark-as-viewed__${htmlForId}`}
                checked = {checkedValue}
                onChange = {onChangeCallback}
                disabled = {ifDisabled}
            />
            <UniversalCheckboxInputCheckmark/>
            <UniversalCheckboxInputLabelText>
                <ReactMarkdown>{checkboxMessage}</ReactMarkdown>
            </UniversalCheckboxInputLabelText>
        </UniversalCheckboxInputContainer>
    </ThemeProvider>
);

export default UniversalCheckboxInputComponent;