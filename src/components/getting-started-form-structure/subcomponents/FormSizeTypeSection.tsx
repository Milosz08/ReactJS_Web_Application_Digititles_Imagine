/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormSizeTypeSection.tsx
 * Last modified: 13/03/2022, 13:19
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

import { GettingStartedTypes } from '../../../static/gettingStartedContent';
import useChangeActiveSectionScroll from '../../../hooks/getting-started/useChangeActiveSectionScroll';

import { RootState } from '../../../redux/store';
import { GettingStartedNavElms } from '../../../redux/redux-dom-manipulate/types';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';
import { RegistrationFormInputs } from '../../../redux/redux-subreducers/redux-forms/types';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import { GettingStartedFromSingleSection } from '../GettingStartedFormStructure.styles';

import GenerateImagesWithText from '../helper-components/generate-images-with-text/GenerateImagesWithText';


const FormSizeTypeSection: React.FC = (): JSX.Element => {

    const { cookiesNotifContainerHeight }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { allRefs, budget } = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);

    useChangeActiveSectionScroll(allRefs![1], GettingStartedNavElms.FILMMAKER);

    return (
        <GettingStartedFromSingleSection
            ref = {allRefs![1]}
            $marginTop = {cookiesNotifContainerHeight}
        >
            <GenerateImagesWithText
                type = {GettingStartedTypes.SIZE}
                nextActive = {GettingStartedNavElms.BUDGET}
                nextContainerRef = {allRefs![2]}
                input = {RegistrationFormInputs.FILMMAKER_SIZE}
                nextElementsRef = {budget!}
            />
        </GettingStartedFromSingleSection>
    );
};

export default FormSizeTypeSection;