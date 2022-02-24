/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CenterContent.tsx
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

import { RoutingPaths } from '../../../static/appRouting';
import { ReferencesFooterContext, ReferencesFooterTypes } from '../Footer';

import {
    FooterArticle, FooterGotoGettingStarted, FooterHeadlight, FooterSingleSectionTopContainer
} from '../Footer.styles';


const CenterContent: React.FC = (): JSX.Element => {

    const { center } = useContext<Partial<ReferencesFooterTypes>>(ReferencesFooterContext);

    return (
        <FooterSingleSectionTopContainer
            ref = {center}
        >
            <FooterHeadlight>
                Let's get started
            </FooterHeadlight>
            <FooterArticle>
                Have you just finished your movie and would like to complement it with an interesting end credits,
                opening credits or subtitles sequence? If so, send us an application form.
            </FooterArticle>
            <FooterGotoGettingStarted
                to = {RoutingPaths.GETTING_STARTED}
            >
                getting started
            </FooterGotoGettingStarted>
        </FooterSingleSectionTopContainer>
    );
};

export default CenterContent;