/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GenerateImagesWithText.tsx
 * Last modified: 14/03/2022, 16:27
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
import { createContext, useContext } from 'react';

import { RegistrationFormInputs } from '../../../../redux/redux-api-thunk/types';
import { GettingStartedNavElms } from '../../../../redux/redux-dom-manipulate/types';
import { GettingStartedContent, GettingStartedTypes } from '../../../../static/gettingStartedContent';

import {
    NavigateRefsContext, NavigateRefsContextTypes
} from '../../../../context/getting-started-multiple-refs/GettingStartedMultipleRefsContext';

import { ImagesWithTextHeader } from '../../GettingStartedFormStructure.styles';
import { ImagesWithTextAllImagesContainer, ImagesWithTextContainer } from './GenerateImagesWithText.styles';

import ImagesStructure from './subcomponents/ImagesStructure';


export interface GenerateImagesContextTypes {
    type: GettingStartedTypes;
    input: RegistrationFormInputs;
    nextContainerRef: React.MutableRefObject<any>;
    nextElementsRef: { header: React.MutableRefObject<any>, childrens: React.MutableRefObject<any> };
    nextActive: GettingStartedNavElms;
}

export const GenerateImagesContext = createContext<Partial<GenerateImagesContextTypes>>({});


const GenerateImagesWithText: React.FC<GenerateImagesContextTypes> = ({
    type, input, nextContainerRef, nextElementsRef, nextActive
}): JSX.Element => {

    const allRefsContext = useContext<Partial<NavigateRefsContextTypes>>(NavigateRefsContext);

    const generateBlocks: JSX.Element[] = GettingStartedContent[type].blocks.map(block => (
        <ImagesStructure
            key = {block}
            block = {block}
        />
    ));

    return (
        <ImagesWithTextContainer>
            <ImagesWithTextHeader
                ref = {allRefsContext[type]!.header}
            >
                {GettingStartedContent[type].header}
            </ImagesWithTextHeader>
            <GenerateImagesContext.Provider
                value = {{ type, input, nextContainerRef, nextElementsRef, nextActive }}
            >
                <ImagesWithTextAllImagesContainer
                    ref = {allRefsContext[type]!.childrens}
                >
                    {generateBlocks}
                </ImagesWithTextAllImagesContainer>
            </GenerateImagesContext.Provider>
        </ImagesWithTextContainer>
    );

};

export default GenerateImagesWithText;