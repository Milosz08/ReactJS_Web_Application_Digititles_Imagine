/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsSingleInputColor.tsx
 * Last modified: 10/04/2022, 02:09
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
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootState } from '../../../redux/store';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import { CmsAllColorsDescriptions } from '../../../static/cmsAllColorsDescriptions';

import {
    CmsAddProjectTextInputTextLabel
} from '../../cms-add-project-text-input-element/CmsAddProjectTextInputElement.styles';

import {
    CmsAddProjectColorsInputElement, CmsAddProjectColorsInputHexTextContent, CmsAddProjectColorsInputLabel,
    CmsAddProjectColorsInputStyledElement
} from '../CmsAddProjectColorsAndSoftwareSection.styles';


interface PropsProvider {
    elementKey: string;
    index: number;
}

const CmsSingleInputColor: React.NamedExoticComponent<PropsProvider> = React
    .memo(({ elementKey, index }: PropsProvider): JSX.Element => {

    const { projectDataForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { projectColours } = projectDataForm;

    const dispatcher = useDispatch();

    const handleChangeColorValue = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatcher(ReduxAPIActions.changeProjectSingleColorValue(elementKey, target.value));
    };

    return (
        <ThemeProvider
            theme = {{ $selectedColor: projectColours[elementKey] }}
        >
            <CmsAddProjectTextInputTextLabel>
                {CmsAllColorsDescriptions[index]}
            </CmsAddProjectTextInputTextLabel>
            <CmsAddProjectColorsInputLabel
                htmlFor = {`cms_project_color__${index}`}
            >
                <CmsAddProjectColorsInputElement
                    type = 'color'
                    id = {`cms_project_color__${index}`}
                    value = {projectColours[elementKey]}
                    onChange = {handleChangeColorValue}
                />
                <CmsAddProjectColorsInputStyledElement
                    title = 'Click to open colour picker and change colour value'
                >
                    <CmsAddProjectColorsInputHexTextContent>
                        {projectColours[elementKey]}
                    </CmsAddProjectColorsInputHexTextContent>
                </CmsAddProjectColorsInputStyledElement>
            </CmsAddProjectColorsInputLabel>
        </ThemeProvider>

    );
});

export default CmsSingleInputColor;