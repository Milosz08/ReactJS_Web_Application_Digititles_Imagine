/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormTypeServiceSection.tsx
 * Last modified: 13/03/2022, 13:16
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

import { GettingStartedTypes } from '../../../static/gettingStartedContent';
import useChangeActiveSectionScroll from '../../../hooks/getting-started/useChangeActiveSectionScroll';

import { RegistrationFormInputs } from '../../../redux/redux-api-thunk/types';
import { GettingStartedNavElms } from '../../../redux/redux-dom-manipulate/types';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import { GettingStartedFromSingleSectionServices } from '../GettingStartedFormStructure.styles';


import GenerateImagesWithText from '../helper-components/generate-images-with-text/GenerateImagesWithText';


const FormTypeServiceSection: React.FC = (): JSX.Element => {

    const { allRefs, size } = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);

    useChangeActiveSectionScroll(allRefs![0], GettingStartedNavElms.SERVICE);

    return (
        <GettingStartedFromSingleSectionServices
            ref = {allRefs![0]}
        >
            <GenerateImagesWithText
                type = {GettingStartedTypes.SERVICE}
                nextActive = {GettingStartedNavElms.FILMMAKER}
                nextContainerRef = {allRefs![1]}
                input = {RegistrationFormInputs.SERVICE_TYPE}
                nextElementsRef = {size!}
            />
        </GettingStartedFromSingleSectionServices>
    );
};

export default FormTypeServiceSection;