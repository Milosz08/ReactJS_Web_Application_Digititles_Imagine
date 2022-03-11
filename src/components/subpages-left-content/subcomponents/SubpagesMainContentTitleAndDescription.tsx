/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: SubpagesMainContentTitleAndDescription.tsx
 * Last modified: 28/02/2022, 17:47
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
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { SubpagesMainContentTypes } from '../../../static/subpagesMainContent';
import { ProjectContext, ProjectContextTypes } from '../../../pages/SingleProjectPageReact';
import useSubpagesMainContentOnLoadAnimation from '../../../hooks/background-images/useSubpagesMainContentOnLoadAnimation';

import { RootState } from '../../../redux/store';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';

import {
    SubpagesMainContentDescription, SubpagesMainContentImage, SubpagesMainContentImageAndTitleContainer,
    SubpagesMainContentTitle, SubpagesMainContentUniversalContainer
} from '../SubpagesLeftContent.styles';


interface PropsProvider {
    content?: SubpagesMainContentTypes | any;
    visibleOnLoad?: boolean;
}

const SubpagesMainContentTitleAndDescription: React.FC<PropsProvider> = ({ content, visibleOnLoad }): JSX.Element => {

    const { stillImage }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { findProject } = useContext<Partial<ProjectContextTypes>>(ProjectContext);

    const { pathname } = useLocation();
    const [ title, description ] = useSubpagesMainContentOnLoadAnimation(
        !Boolean(visibleOnLoad) && !stillImage && pathname.includes('/projects/project')
    );

    return (
        <SubpagesMainContentUniversalContainer>
            <ThemeProvider
                theme = {{ $hideOnLoad: !stillImage }}
            >
                <SubpagesMainContentImageAndTitleContainer
                    ref = {title}
                >
                    {!content.dotColor && <SubpagesMainContentImage
                        src = {process.env.PUBLIC_URL + '/asset-images/undraw-images/undraw_' + content?.images[0] + '.svg'}
                    />}
                    <SubpagesMainContentTitle
                        $color = {findProject?.projectColours.strongForeground!}
                    >
                        {content?.title}
                    </SubpagesMainContentTitle>
                </SubpagesMainContentImageAndTitleContainer>
                <SubpagesMainContentDescription
                    ref = {description}
                >
                    {content?.description}
                </SubpagesMainContentDescription>
            </ThemeProvider>
        </SubpagesMainContentUniversalContainer>
    );
};

export default SubpagesMainContentTitleAndDescription;