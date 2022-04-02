/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsInheritLayoutPageReact.tsx
 * Last modified: 22/03/2022, 12:16
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
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useBasicAnimationOnEnterCmsPanel from '../hooks/cms-page/useBasicAnimationOnEnterCmsPanel';

import { RootState } from '../redux/store';
import { Webpage } from '../helper-primitives/Webpage';
import { InitStateDOMtypes } from '../redux/redux-dom-manipulate/initialState';

import { CmsSafetyAreaContainer, CmsSafetyAreaWrapper } from '../styles/mixins.styles';

import LoadCmsData from '../router/LoadCmsData';
import CmsDeleteContentModal from '../components/cms-delete-content-modal/CmsDeleteContentModal';
import NavigationScrollTop from '../components/navigation-scroll-top/NavigationScrollTop';
import CmsMainHeaderInfo from '../components/cms-main-header-info/CmsMainHeaderInfo';
import HeaderElement from '../components/universal-components/HeaderElement';
import CmsNavigationInline from '../components/cms-navigation-inline/CmsNavigationInline';
import Footer from '../components/footer/Footer';


const CmsInheritLayoutPageReact: React.FC = (): JSX.Element => {

    const { cmsSelectedProject }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { pathname } = useLocation();

    const parentRef = useBasicAnimationOnEnterCmsPanel();

    return (
        <>
            <LoadCmsData/>
            <CmsDeleteContentModal/>
            <NavigationScrollTop/>
            <CmsSafetyAreaContainer>
                <CmsSafetyAreaWrapper
                    ref = {parentRef}
                >
                    <CmsMainHeaderInfo/>
                    <HeaderElement
                        ifRemoveMargin = {true}
                        dotColor = {cmsSelectedProject.dotColor}
                    >
                        {Webpage.convertPathnameToCmsHeader(cmsSelectedProject.title || pathname)}
                    </HeaderElement>
                    <CmsNavigationInline/>
                    <Outlet/>
                </CmsSafetyAreaWrapper>
            </CmsSafetyAreaContainer>
            <Footer/>
        </>
    );
};

export default CmsInheritLayoutPageReact;