/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectsPageReact.tsx
 * Last modified: 21/02/2022, 21:41
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

import { SubpagesContent, SubpagesContentKeys } from '../static/subpagesMainContent';
import useInsertRefOnLoad from '../hooks/reusable/useInsertRefOnLoad';

import NavigationBottomBar from '../components/navigation-bottom-bar/NavigationBottomBar';
import UniversalPageMainContentHOC from '../high-order-components/UniversalPageMainContentHOC';
import SubpagesMainContentTitleAndDescription from '../components/subpages-left-content/subcomponents/SubpagesMainContentTitleAndDescription';
import AllProjectsList from '../components/all-projects-list/AllProjectsList';
import Footer from '../components/footer/Footer';


const ProjectsPageReact: React.FC = (): JSX.Element => {

    const { allRefs, listeners } = useInsertRefOnLoad(SubpagesContentKeys.PROJECTS);

    return (
        <>
            <NavigationBottomBar listeners = {listeners!} />
            <UniversalPageMainContentHOC
                showBackgroundOnLoad = {true}
                LeftComponent = {SubpagesMainContentTitleAndDescription}
                content = {SubpagesContent[SubpagesContentKeys.PROJECTS]}
            />
            <AllProjectsList redirRef = {allRefs[0]}/>
            <Footer/>
        </>
    );
};

export default ProjectsPageReact;