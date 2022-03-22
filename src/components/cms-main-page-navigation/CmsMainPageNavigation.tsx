/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsMainPageNavigation.tsx
 * Last modified: 22/03/2022, 18:00
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

import { Webpage } from '../../helper-primitives/Webpage';
import { CmsMainPageNavigationElements } from '../../static/appRouting';


import {
    CmsMainPageArrowIcon, CmsMainPageNavigationContainer, CmsMainPageNavigationHeader,
    CmsMainPageNavigationIconWrapper, CmsMainPageNavigationLink
} from './CmsMainPageNavigation.styles';


const CmsMainPageNavigation: React.FC = (): JSX.Element => {

    const generateAllLinks: JSX.Element[] = CmsMainPageNavigationElements.map(navigation => (
        <CmsMainPageNavigationLink
            to = {navigation.path}
        >
            <CmsMainPageNavigationHeader>
                {Webpage.convertPathnameToCmsHeader(navigation.path)}
            </CmsMainPageNavigationHeader>
            <CmsMainPageNavigationIconWrapper>
                {navigation.icon}
            </CmsMainPageNavigationIconWrapper>
            <CmsMainPageArrowIcon/>
        </CmsMainPageNavigationLink>
    ));

    return (
        <CmsMainPageNavigationContainer>
            {generateAllLinks}
        </CmsMainPageNavigationContainer>
    );
};

export default CmsMainPageNavigation;