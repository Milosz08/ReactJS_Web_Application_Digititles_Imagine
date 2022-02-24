/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: HeaderLogoLeftContent.tsx
 * Last modified: 21/02/2022, 23:47
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

import { RoutingPaths } from '../../../static/appRouting';
import useMainHeaderTitleAnimations from '../../../hooks/header-with-menu/useMainHeaderTitleAnimations';

import {
    HeaderLogoImage, HeaderLogoImagesContainer, HeaderLogoLeftContentContainer, HeaderLogoTitle
} from '../Header.styles';


const HeaderLogoLeftContent: React.FC = (): JSX.Element => {

    const [ headerTitleRef, ifMenuOpen ] = useMainHeaderTitleAnimations();

    return (
        <HeaderLogoLeftContentContainer
            to = {RoutingPaths.START}
        >
            <HeaderLogoImagesContainer>
                <HeaderLogoImage
                    src = {`${process.env.PUBLIC_URL}/asset-images/digititleslogowhite.svg`}
                    $ifActive = {ifMenuOpen}
                />
                <HeaderLogoImage
                    src = {`${process.env.PUBLIC_URL}/asset-images/digititleslogocolor.svg`}
                    $ifActive = {!ifMenuOpen}
                />
            </HeaderLogoImagesContainer>
            <HeaderLogoTitle
                ref = {headerTitleRef}
            >
                digititles<span>imagine</span>
            </HeaderLogoTitle>
        </HeaderLogoLeftContentContainer>
    );
};

export default HeaderLogoLeftContent;