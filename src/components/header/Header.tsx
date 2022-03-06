/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Header.tsx
 * Last modified: 21/02/2022, 23:12
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
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

import useHeaderChangePositionSmallDevices from '../../hooks/header-with-menu/useHeaderChangePositionSmallDevices';

import { HeaderContainer } from './Header.styles';

import HeaderLogoLeftContent from './subcomponents/HeaderLogoLeftContent';
import HeaderNavRightContent from './subcomponents/HeaderNavRightContent';


const Header: React.FC = (): JSX.Element => {

    const { ifMenuOpen, scrollDisabledPx }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const [ headerRef, gradient ] = useHeaderChangePositionSmallDevices({ invokePx: 1030 });

    return (
        <HeaderContainer
            $ifMenuOpen = {ifMenuOpen}
            $ifGradient = {gradient}
            $scrollDisabledPx = {scrollDisabledPx}
            ref = {headerRef}
        >
            <HeaderLogoLeftContent/>
            <HeaderNavRightContent/>
        </HeaderContainer>
    );
};

export default Header;