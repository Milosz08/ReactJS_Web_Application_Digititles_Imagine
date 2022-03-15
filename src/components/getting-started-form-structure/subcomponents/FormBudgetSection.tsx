/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: FormBudgetSection.tsx
 * Last modified: 13/03/2022, 13:24
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

import { GettingStartedNavElms } from '../../../redux/redux-dom-manipulate/types';
import useChangeActiveSectionScroll from '../../../hooks/getting-started/useChangeActiveSectionScroll';
import useBlockClickAnimationSequence from '../../../hooks/getting-started/useBlockClickAnimationSequence';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import {
    GettingStartedBudgetParagraph, GettingStartedFromSingleSection, GettingStartedNotImagesContentContainer,
    GettingStartedNotImagesSectionContainer, GettingStartedButtonElement, ImagesWithTextHeader
} from '../GettingStartedFormStructure.styles';

import BudgetRangeInput from '../helper-components/budget-range-input/BudgetRangeInput';



const FormBudgetSection: React.FC = (): JSX.Element => {

    const { allRefs, budget, registration } = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);
    useChangeActiveSectionScroll(allRefs![2], GettingStartedNavElms.BUDGET);

    const handleGotoRegistrationSection = useBlockClickAnimationSequence({
        nextContainerRef: allRefs![3], nextRef: registration!, nextActive: GettingStartedNavElms.DETAILS
    });

    return (
        <GettingStartedFromSingleSection
            ref = {allRefs![2]}
        >
            <GettingStartedNotImagesSectionContainer>
                <ImagesWithTextHeader
                    ref = {budget!.header}
                >
                    How budget do you have
                </ImagesWithTextHeader>
                <GettingStartedNotImagesContentContainer
                    ref = {budget!.childrens}
                >
                    <GettingStartedBudgetParagraph>
                        Tell us what budget you have for the credit sequence. Please note that this is only an indicative
                        value that is subject to change. The price of credits is influenced by their length, rendering
                        resolution and the degree of sophistication of the credit animation.
                    </GettingStartedBudgetParagraph>
                    <BudgetRangeInput/>
                    <GettingStartedButtonElement
                        type = 'button'
                        onClick = {handleGotoRegistrationSection}
                    >
                        Go to registration
                    </GettingStartedButtonElement>
                </GettingStartedNotImagesContentContainer>
            </GettingStartedNotImagesSectionContainer>
        </GettingStartedFromSingleSection>
    );
};

export default FormBudgetSection;
