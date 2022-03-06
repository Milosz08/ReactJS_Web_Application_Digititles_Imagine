/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: App.tsx
 * Last modified: 24/02/2022, 15:01
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
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../redux/store';

import GlobalStylesInjection from '../styles/global.styles';
import FontfacesStylesInjection from '../styles/fontfaces.styles';

import InvokeOnMount from './InvokeOnMount';
import LoadAllAPIData from './LoadAllAPIData';
import ScrollAndSuspenseBars from '../components/scroll-and-suspense-bars/ScrollAndSuspenseBars';
import ForceScrollToTopHOC from '../high-order-components/ForceScrollToTopHOC';
import MainMenu from '../components/main-menu/MainMenu';
import Header from '../components/header/Header';
import AppRoutes from './AppRoutes';


const App: React.FC = (): JSX.Element => (
    <Provider store = {store}>
        <FontfacesStylesInjection/>
        <GlobalStylesInjection/>
        <InvokeOnMount/>
        <LoadAllAPIData/>
        <ScrollAndSuspenseBars/>
        <BrowserRouter>
            <ForceScrollToTopHOC>
                <MainMenu/>
                <Header/>
                <AppRoutes/>
            </ForceScrollToTopHOC>
        </BrowserRouter>
    </Provider>
);

export default App;