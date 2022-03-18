/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormRegistrationSection.tsx
 * Last modified: 13/03/2022, 13:26
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

import { GettingStartedNavElms } from '../../../redux/redux-dom-manipulate/types';
import useChangeActiveSectionScroll from '../../../hooks/getting-started/useChangeActiveSectionScroll';

import { RootState } from '../../../redux/store';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import {
    GettingStartedFromSingleSection, ImagesWithTextHeader, GettingStartedNotImagesSectionContainer,
    GettingStartedBudgetParagraph, GettingStartedButtonElement, GettingStartedNotImagesContentContainer,
    GettingStartedLinkElement
} from '../GettingStartedFormStructure.styles';

import FormRegistration from '../helper-components/form-registration/FormRegistration';


const FormRegistrationSection: React.FC = (): JSX.Element => {

    const { allRefs, registration } = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);
    const { cookiesNotifContainerHeight }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    useChangeActiveSectionScroll(allRefs![3], GettingStartedNavElms.DETAILS);

    return (
        <GettingStartedFromSingleSection
            ref = {allRefs![3]}
            $marginTop = {cookiesNotifContainerHeight}
        >
            <GettingStartedNotImagesSectionContainer>
                <ImagesWithTextHeader
                    ref = {registration!.header}
                >
                    Your details
                </ImagesWithTextHeader>
                <GettingStartedNotImagesContentContainer
                    ref = {registration!.childrens}
                >
                    <GettingStartedBudgetParagraph>
                        If you have any detailed comments on credits, you can write them in the form below. We only
                        use your personal data to contact us. We do not store your personal data on third-party
                        servers. For more info about us privacy policy click{' '}
                        <GettingStartedLinkElement
                            target = '_blank'
                            href = '/privacy-policy.html'
                        >
                            here
                        </GettingStartedLinkElement>.
                    </GettingStartedBudgetParagraph>
                    <FormRegistration/>
                    <GettingStartedButtonElement
                        type = 'submit'
                    >
                        Submit form
                    </GettingStartedButtonElement>
                </GettingStartedNotImagesContentContainer>
            </GettingStartedNotImagesSectionContainer>
        </GettingStartedFromSingleSection>
    );
};

export default FormRegistrationSection;