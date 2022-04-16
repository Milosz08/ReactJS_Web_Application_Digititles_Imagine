/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ImagesStructure.tsx
 * Last modified: 14/03/2022, 17:38
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
import { useDispatch } from 'react-redux';

import { GettingStartedTypes } from '../../../../../static/gettingStartedContent';
import { GenerateImagesContext, GenerateImagesContextTypes } from '../GenerateImagesWithText';
import useBlockClickAnimationSequence from '../../../../../hooks/getting-started/useBlockClickAnimationSequence';

import { ReduxFormsActions } from '../../../../../redux/redux-subreducers/redux-forms/actions';
import { RegistrationFormInputs } from '../../../../../redux/redux-subreducers/redux-forms/types';

import {
    ImagesWithTextDescription, ImagesWithTextImage, ImagesWithTextImageRadioButton, ImagesWithTextImagesContainer
} from '../GenerateImagesWithText.styles';


interface PropsProvider {
    block: string;
}

const ImagesStructure: React.FC<PropsProvider> = ({ block }): JSX.Element => {

    const contextValues = useContext<Partial<GenerateImagesContextTypes>>(GenerateImagesContext);
    const { type, input, nextContainerRef, nextElementsRef, nextActive } = contextValues;

    const handleChangeActiveSection = useBlockClickAnimationSequence({
        nextContainerRef: nextContainerRef!, nextRef: nextElementsRef!, nextActive: nextActive!
    });

    const { FILMMAKER_SIZE } = RegistrationFormInputs;
    const dispatcher = useDispatch();

    const handleBlockName = (block: string): string => {
        const initialValue = block.replaceAll(' ', '').replaceAll(`'`, '');
        return type === GettingStartedTypes.SIZE ? `filmmaker${initialValue}` : initialValue;
    };

    const handleChangeInputValue = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatcher(ReduxFormsActions.setFieldInRegistrationForm(input!, target.value));
    };

    return (
        <ImagesWithTextImagesContainer
            htmlFor = {block}
        >
            <ImagesWithTextImageRadioButton
                type = 'radio'
                name = {type}
                id = {block}
                value = {input === FILMMAKER_SIZE ? `filmmaker_${block}` : block.replaceAll(' ', '_')}
                onClick = {handleChangeActiveSection}
                onChange = {handleChangeInputValue}
            />
            <ImagesWithTextImage
                src = {`${process.env.PUBLIC_URL}/asset-images/undraw-images/undraw_${handleBlockName(block)}.svg`}
            />
            <ImagesWithTextDescription>
                {block}
            </ImagesWithTextDescription>
        </ImagesWithTextImagesContainer>
    );
};

export default ImagesStructure;