/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FooterForm.tsx
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

import * as React from 'react';

import { FooterFormContainer, FooterFormSubmitButton, FooterFormSubmitButtonContainer } from './FooterForm.styles';

const FooterFormInputs = React.lazy(() => import('./subcomponents/FooterFormInputs'));
const FooterFormTextarea = React.lazy(() => import('./subcomponents/FooterFormTextarea'));


const FooterForm: React.FC = (): JSX.Element => {

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('submit form');
    };

    return (
        <FooterFormContainer
            noValidate = {true}
            onSubmit = {handleSubmit}
        >
            <FooterFormInputs/>
            <FooterFormTextarea/>
            <FooterFormSubmitButtonContainer>
                <FooterFormSubmitButton>
                    send message
                </FooterFormSubmitButton>
            </FooterFormSubmitButtonContainer>
        </FooterFormContainer>
    );
};

export default FooterForm;