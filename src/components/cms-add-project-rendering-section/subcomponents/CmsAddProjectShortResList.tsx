/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectShortResList.tsx
 * Last modified: 08/04/2022, 02:00
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

import { RootState } from '../../../redux/store';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { ProjectFieldsKeys } from '../../../redux/redux-api-thunk/types';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { TechnicalBlocksStructure } from '../../../static/resolutionsAndPrograms';

import {
    CmsAddProjectRenderingIfImaxArrow, CmsAddProjectRenderingIfImaxSelectBox, CmsAddProjectRenderingIfImaxSelectBoxLabel
} from '../CmsAddProjectRenderingSection.styles';

import {
    CmsAddProjectTextInputTextLabel
} from '../../cms-add-project-text-input-element/CmsAddProjectTextInputElement.styles';


const CmsAddProjectShortResList: React.FC = (): JSX.Element => {

    const state: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { projects, projectDataForm, projectDataFormErrors } = state;

    const allTypesOfResolutions = projects.map(projects => projects.renderProps.shortResolution.toUpperCase());
    const dispatcher = useDispatch();

    const withoutImax = TechnicalBlocksStructure.resolutions
        .filter(res => res !== 'imax')
        .map(res => res.toUpperCase());

    const removeDuplicats = Array.from(new Set(allTypesOfResolutions.concat(withoutImax)));
    const withFirstSeeLabel = ['Choose resolution'].concat(removeDuplicats);

    const generateOptions = withFirstSeeLabel.map(res => <option key = {res}>{res}</option>);

    const handleChangeSelectElement = ({ target }: React.ChangeEvent<HTMLSelectElement>): void => {
        dispatcher(ReduxAPIActions.insertProjectFormElement(ProjectFieldsKeys.SHORT_RESOLUTION, target.value));
    };

    return (
        <CmsAddProjectRenderingIfImaxSelectBoxLabel
            htmlFor = 'select_short_res__input'
        >
            <CmsAddProjectTextInputTextLabel>
                Short resolution
            </CmsAddProjectTextInputTextLabel>
            <CmsAddProjectRenderingIfImaxArrow/>
            <CmsAddProjectRenderingIfImaxSelectBox
                id = 'select_short_res__input'
                value = {projectDataForm.shortResolution.toUpperCase()}
                onChange = {handleChangeSelectElement}
                $ifError = {projectDataFormErrors.shortResolution}
            >
                {generateOptions}
            </CmsAddProjectRenderingIfImaxSelectBox>
        </CmsAddProjectRenderingIfImaxSelectBoxLabel>
    );
};

export default CmsAddProjectShortResList;