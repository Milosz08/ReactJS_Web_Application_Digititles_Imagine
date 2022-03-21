/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: UniversalPasswordInput.tsx
 * Last modified: 20/03/2022, 20:50
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
import { useState } from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import {
    UniversalPasswordButtonChangeVisibility, UniversalPasswordInputElement, UniversalPasswordInputLabel
} from './UniversalPasswordInput.styles';


interface PropsProvider {
    placeholder: string;
    ifProtected?: boolean;
    ifError: boolean;
    elementRef: React.MutableRefObject<any>;
}

const UniversalPasswordInput: React.FC<PropsProvider> = ({ placeholder, ifProtected, ifError, elementRef }): JSX.Element => {

    const [ isHidden, setIsHidden ] = useState<boolean>(true);

    const changeVisibility = (): void => {
        if (Boolean(elementRef.current.value)) {
            setIsHidden(prevState => !prevState)
        }
    };

    return (
        <UniversalPasswordInputLabel
            htmlFor = {placeholder}
        >
            <UniversalPasswordInputElement
                type = {ifProtected ? isHidden ? 'password' : 'text' : 'text'}
                placeholder = {placeholder}
                $ifError = {ifError}
                id = {placeholder}
                ref = {elementRef}
            />
            {ifProtected && <UniversalPasswordButtonChangeVisibility
                onClick = {changeVisibility}
                $ifError = {ifError}
                type = 'button'
            >
                {isHidden ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
            </UniversalPasswordButtonChangeVisibility>}
        </UniversalPasswordInputLabel>
    );
};

export default UniversalPasswordInput;