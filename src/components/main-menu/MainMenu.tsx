/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainMenu.tsx
 * Last modified: 25/02/2022, 01:04
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

import useHideMenuOnChangeRoute from '../../hooks/header-with-menu/useHideMenuOnChangeRoute';

import { MainMenuContainer } from './MainMenu.styles';

import LeftContent from './subcomponents/LeftContent';
import CenterContent from './subcomponents/CenterContent';
import RightContent from './subcomponents/RightContent';


const MainMenu: React.FC = (): JSX.Element => {

    const ifMenuOpen = useHideMenuOnChangeRoute();

    return (
        <MainMenuContainer
            $ifActive = {ifMenuOpen}
        >
            <LeftContent/>
            <CenterContent/>
            <RightContent/>
        </MainMenuContainer>
    );
};

export default MainMenu;