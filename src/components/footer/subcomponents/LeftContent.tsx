/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: LeftContent.tsx
 * Last modified: 24/02/2022, 02:21
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
import { useContext } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

import { ReferencesFooterContext, ReferencesFooterTypes } from '../Footer';

import {
    FooterSingleSectionContainer, FooterHeadlight, FooterArticle, FooterMailToContainer, FooterMailToLinks
} from '../Footer.styles';


const LeftContent: React.FC = (): JSX.Element => {

    const { left } = useContext<Partial<ReferencesFooterTypes>>(ReferencesFooterContext);

    const generateEmailLinks: JSX.Element[] = [ 'business', 'office' ].map(link => (
        <FooterMailToContainer
            key = {link}
        >
            <AiOutlineMail/>
            <FooterMailToLinks
                href = {`mailto:${link}@${window.location.hostname}`}
            >
                {link}@{window.location.hostname}
            </FooterMailToLinks>
        </FooterMailToContainer>
    ));

    return (
        <FooterSingleSectionContainer
            ref = {left}
        >
            <FooterHeadlight>
                About us
            </FooterHeadlight>
            <FooterArticle>
                We are ambitious young people that supplied professional post-production typography services
                (opening credits, end credits, end cards and subtitles) for small and medium as well as large filmmakers.
            </FooterArticle>
            <FooterHeadlight>
                Contact with us
            </FooterHeadlight>
            {generateEmailLinks}
        </FooterSingleSectionContainer>
    );
};

export default LeftContent;