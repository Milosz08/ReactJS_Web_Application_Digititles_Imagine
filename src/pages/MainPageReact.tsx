/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MainPageReact.tsx
 * Last modified: 21/02/2022, 21:11
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

import useMultipleRefs from '../hooks/reusable/useMultipleRefs';
import DelayRouteLinkHOC from '../high-order-components/DelayRouteLinkHOC';
import BackgroundFluidImage from '../components/background-fluid-image/BackgroundFluidImage';

const NavigationBottomBar = React.lazy(() => import('../components/navigation-bottom-bar/NavigationBottomBar'));
const NavigationScrollTop = React.lazy(() => import('../components/navigation-scroll-top/NavigationScrollTop'));
const Footer = React.lazy(() => import('../components/footer/Footer'));
const MainPageAnimateTitle = React.lazy(() => import('../components/main-page-animate-title/MainPageAnimateTitle'));


const MainPageReact: React.FC = (): JSX.Element => {

    const { elRefs } = useMultipleRefs(2);
    const [ projects, services ] = elRefs;

    return (
        <>
            <NavigationBottomBar
                listeners = {[ { ariaLabel: 'projects', goto: projects }, { ariaLabel: 'services', goto: services } ]}
            />
            <BackgroundFluidImage/>
            <NavigationScrollTop/>
            <MainPageAnimateTitle/>
            main page
            <div style = {{ display: 'flex', alignItems: 'flex-end', height: '300vh' }}>
                <DelayRouteLinkHOC to = '/projects/1234' delay = {1000}>
                    projects
                </DelayRouteLinkHOC>
            </div>
            <div ref = {projects}>projects</div>
            <div ref = {services}>services</div>
            <Footer/>
        </>
    );

};

export default MainPageReact;