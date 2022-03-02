/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Footer.tsx
 * Last modified: 23/02/2022, 22:13
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
import { createContext } from 'react';

import useShowHideFooterSectionsOnScrollTrigger from '../../hooks/footer/useShowHideFooterSectionsOnScrollTrigger';

import { FooterContainer, FooterThreeContentBlocksContainer } from './Footer.styles';

import LeftContent from './subcomponents/LeftContent';
import CenterContent from './subcomponents/CenterContent';
import RightContent from './subcomponents/RightContent';
import CopyrightContent from './subcomponents/CopyrightContent';

export type ReferencesFooterTypes = { [key: string]: React.MutableRefObject<any> };
export const ReferencesFooterContext = createContext<Partial<ReferencesFooterTypes>>({ });


const Footer: React.FC = (): JSX.Element => {

    const { elRefs, footerRef } = useShowHideFooterSectionsOnScrollTrigger();
    const [ left, center, right, copy ] = elRefs;

    return (
        <FooterContainer
            ref = {footerRef}
        >
            <ReferencesFooterContext.Provider
                value = {{ left, center, right, copy }}
            >
                <FooterThreeContentBlocksContainer>
                    <LeftContent/>
                    <CenterContent/>
                    <RightContent/>
                </FooterThreeContentBlocksContainer>
                <CopyrightContent/>
            </ReferencesFooterContext.Provider>
        </FooterContainer>
    );
};

export default Footer;