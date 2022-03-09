/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesInitialFluidContent.tsx
 * Last modified: 07/03/2022, 02:10
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

import { RelativeContentContainer } from '../../styles/mixins.styles';

import useMultipleRefs from '../../hooks/reusable/useMultipleRefs';
import { AllSections, ServicesSections } from '../../redux/redux-dom-manipulate/types';
import { SubpagesContent, SubpagesContentKeys } from '../../static/subpagesMainContent';

import UniversalPageMainContentHOC from '../../high-order-components/UniversalPageMainContentHOC';
import SubpagesMainContentTitleAndDescription from '../subpages-left-content/subcomponents/SubpagesMainContentTitleAndDescription';
import ServicesLeftContentElements from './subcomponents/ServicesLeftContentElements';
import NavigationScrollPropArray from '../navigation-scroll-prop-array/NavigationScrollPropArray';
import ServicesSoftwareSection from '../services-software-section/ServicesSoftwareSection';
import ServicesQualitySection from '../services-quality-section/ServicesQualitySection';


interface PropsProvider {
    referential: React.MutableRefObject<any>;
}

const ServicesInitialFluidContent: React.FC<PropsProvider> = ({ referential }): JSX.Element => {

    const { elRefs } = useMultipleRefs(2);
    const [ softwareRef, qualityRef ] = elRefs;

    return (
        <>
            <RelativeContentContainer>
                <UniversalPageMainContentHOC
                    showBackgroundOnLoad = {true}
                    LeftComponent = {SubpagesMainContentTitleAndDescription}
                    content = {SubpagesContent[SubpagesContentKeys.SERVICES]}
                />
                <ServicesLeftContentElements
                    referentialObject = {referential}
                />
            </RelativeContentContainer>
            <RelativeContentContainer>
                <NavigationScrollPropArray
                    propArray = {Object.keys(ServicesSections).map(key => ServicesSections[key].toString())}
                    sectionType = {AllSections.SERVICES}
                    scrollToRefsArray = {[referential].concat(elRefs)}
                />
                <ServicesSoftwareSection
                    referential = {softwareRef}
                />
                <ServicesQualitySection
                    referential = {qualityRef}
                />
            </RelativeContentContainer>
        </>
    );
};

export default ServicesInitialFluidContent;