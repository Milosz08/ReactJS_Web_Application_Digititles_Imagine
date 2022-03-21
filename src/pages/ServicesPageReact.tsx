/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesPageReact.tsx
 * Last modified: 21/02/2022, 19:00
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

import { NextElementProps } from '../static/nextElementProps';
import { SubpagesContentKeys } from '../static/subpagesMainContent';

import useInsertRefOnLoad from '../hooks/reusable/useInsertRefOnLoad';
import useInsertHeightElement from '../hooks/reusable/useInsertHeightElement';

import NavigationBottomBar from '../components/navigation-bottom-bar/NavigationBottomBar';
import ServicesInitialFluidContent from '../components/services-initial-fluid-content/ServicesInitialFluidContent';
import NextElementSection from '../components/next-element-section/NextElementSection';
import Footer from '../components/footer/Footer';


const ServicesPageReact: React.FC = (): JSX.Element => {

    const { allRefs, listeners } = useInsertRefOnLoad(SubpagesContentKeys.SERVICES);

    useInsertHeightElement(allRefs[0], true);

    return (
        <>
            <NavigationBottomBar listeners = {listeners!} />
            <ServicesInitialFluidContent
                referential = {allRefs[0]}
            />
            <NextElementSection
                content = {NextElementProps.projects}
            />
            <Footer/>
        </>
    );
};

export default ServicesPageReact;