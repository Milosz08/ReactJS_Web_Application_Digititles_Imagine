/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: EmailLinks.tsx
 * Last modified: 01/03/2022, 18:28
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
import { AiOutlineMail } from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';

import { FooterMailToContainer, FooterMailToLinks } from '../Footer.styles';


interface PropsProvider {
    ifIsMenu?: boolean;
}

const EmailLinks: React.FC<PropsProvider> = ({ ifIsMenu }): JSX.Element => {

    const generateEmailLinks: JSX.Element[] = [ 'business', 'office' ].map(link => (
        <ThemeProvider
            theme = {{ $ifIsMenu: ifIsMenu }}
            key = {link}
        >
            <FooterMailToContainer>
                <AiOutlineMail/>
                <FooterMailToLinks
                    href = {`mailto:${link}@${window.location.hostname}`}
                >
                    {link}@{window.location.hostname}
                </FooterMailToLinks>
            </FooterMailToContainer>
        </ThemeProvider>

    ));

    return (
        <>
            {generateEmailLinks}
        </>
    );
};

export default EmailLinks;