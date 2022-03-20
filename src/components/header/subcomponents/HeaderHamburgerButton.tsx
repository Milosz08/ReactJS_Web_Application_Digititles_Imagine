/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: HeaderHamburgerButton.tsx
 * Last modified: 22/02/2022, 20:51
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
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { RoutingPaths } from '../../../static/appRouting';
import useClickHamburgerButton from '../../../hooks/header-with-menu/useClickHamburgerButton';

import { RootState } from '../../../redux/store';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { CmsCredentialsLevels } from '../../../redux/redux-api-thunk/types';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';

import { HeaderNavRightHamburgerElement, HeaderNavRightMenuElement, HeaderNavRightMenuLabel } from '../Header.styles';


const HeaderHamburgerButton: React.FC = (): JSX.Element => {

    const { ifMenuOpen, hamActive, headerLight }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { pathname } = useLocation();
    const dispatcher = useDispatch();

    const [ ifAbsolute, handleHamburger ] = useClickHamburgerButton(ifMenuOpen);

    const handleLoggedOut = (): void => {
        if (pathname.includes(RoutingPaths.ADMIN_PANEL)) {
            dispatcher(ReduxAPIActions.changeSessionInfo(false, CmsCredentialsLevels.UNDEFINED, ''));
        }
    };

    return (
        <ThemeProvider theme = {{ $ifHamActive: hamActive, $ifMenuOpen: ifMenuOpen || headerLight }}>
            <HeaderNavRightMenuElement
                onClick = {handleHamburger}
            >
                <HeaderNavRightMenuLabel
                    onClick = {handleLoggedOut}
                >
                    {ifAbsolute ? 'menu' : pathname.includes(RoutingPaths.ADMIN_PANEL) ? 'log out' : 'return'}
                </HeaderNavRightMenuLabel>
                <HeaderNavRightHamburgerElement/>
            </HeaderNavRightMenuElement>
        </ThemeProvider>
    );
};

export default HeaderHamburgerButton;