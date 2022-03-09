/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectInitialFluidContent.tsx
 * Last modified: 07/03/2022, 01:34
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

import useMultipleRefs from '../../hooks/reusable/useMultipleRefs';
import { SubpagesMainContentTypes } from '../../static/subpagesMainContent';
import { SingleProjectStructure } from '../../static/singleProjectStructure';
import { AllSections, ProjectSections } from '../../redux/redux-dom-manipulate/types';

import { RelativeContentContainer } from '../../styles/mixins.styles';

import UniversalPageMainContentHOC from '../../high-order-components/UniversalPageMainContentHOC';
import SubpagesMainContentTitleAndDescription from '../subpages-left-content/subcomponents/SubpagesMainContentTitleAndDescription';
import HeaderWithParagraphSection from './subcomponents/HeaderWithParagraphSection';
import NavigationScrollPropArray from '../navigation-scroll-prop-array/NavigationScrollPropArray';
import ProjectProductionSection from '../project-production-section/ProjectProductionSection';
import ProjectImageParallax from '../project-image-parallax/ProjectImageParallax';
import ProjectTechnicalsSection from '../project-technicals-section/ProjectTechnicalsSection';


interface PropsProvider {
    content: SubpagesMainContentTypes;
    photo: string;
    referential: React.MutableRefObject<any>;
}

const ProjectInitialFluidContent: React.FC<PropsProvider> = ({ content, photo, referential }): JSX.Element => {

    const { elRefs } = useMultipleRefs(2);

    const [ productionRef, technicalsRef ] = elRefs;

    return (
        <>
            <RelativeContentContainer>
                <UniversalPageMainContentHOC
                    showBackgroundOnLoad = {true}
                    LeftComponent = {SubpagesMainContentTitleAndDescription}
                    content = {content}
                    imageSource = {photo || ''}
                    ifSingleProject = {true}
                    visibleOnLoad = {true}
                />
                <HeaderWithParagraphSection
                    referentialObject = {referential}
                    schema = {SingleProjectStructure.about}
                    sectionKey = {AllSections.PROJECT}
                />
            </RelativeContentContainer>
            <RelativeContentContainer>
                <NavigationScrollPropArray
                    propArray = {Object.keys(ProjectSections).map(key => ProjectSections[key].toString())}
                    sectionType = {AllSections.PROJECT}
                    scrollToRefsArray = {[referential].concat(elRefs)}
                />
                <ProjectProductionSection
                    referential = {productionRef}
                />
                <ProjectImageParallax/>
                <ProjectTechnicalsSection
                    referential = {technicalsRef}
                />
            </RelativeContentContainer>
        </>
    );
};

export default ProjectInitialFluidContent;