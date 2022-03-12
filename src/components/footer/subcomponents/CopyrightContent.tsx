/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CopyrightContent.tsx
 * Last modified: 24/02/2022, 02:22
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
import TimeManagement from '../../../helper-primitives/TimeManagement';
import { ReferencesFooterContext, ReferencesFooterTypes } from '../Footer';

import {
    FooterCopyrightSectionContainer, FooterSectionCopyContainer, FooterSectionCopySingleSectionElement,
    FooterSectionCopySingleSectionLink, FooterSimpleAnchorLink
} from '../Footer.styles';

import CopyrightSocials from './CopyrightSocials';


const CopyrightContent: React.FC = (): JSX.Element => {

    const { copy } = useContext<Partial<ReferencesFooterTypes>>(ReferencesFooterContext);

    return (
        <FooterCopyrightSectionContainer
            ref = {copy}
        >
            <FooterSectionCopyContainer>
                <FooterSectionCopySingleSectionElement>
                    &copy; {TimeManagement.generateCopyDate()} by Digititles Imagine
                </FooterSectionCopySingleSectionElement>
                <FooterSimpleAnchorLink
                    href = {RoutingPaths.PRIVACY_POLICY + '.html'}
                >
                    Privacy Policy
                </FooterSimpleAnchorLink>
                <FooterSectionCopySingleSectionLink
                    to = {RoutingPaths.LOGIN}
                >
                    Admin Panel
                </FooterSectionCopySingleSectionLink>
            </FooterSectionCopyContainer>
            <CopyrightSocials/>
        </FooterCopyrightSectionContainer>
    );
};

export default CopyrightContent;