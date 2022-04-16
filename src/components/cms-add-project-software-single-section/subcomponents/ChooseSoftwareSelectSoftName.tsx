/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ChooseSoftwareSelectSoftName.tsx
 * Last modified: 16/04/2022, 04:12
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
import { useDispatch, useSelector } from 'react-redux';

import { Webpage } from '../../../helper-primitives/Webpage';
import useGenerateSoftwareNameSelectBoxes from '../../../hooks/cms-page/useGenerateSoftwareNameSelectBoxes';

import { RootState } from '../../../redux/store';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import {
    SoftwareContext, SoftwareContextTypes
} from '../../cms-add-project-colors-and-software-section/subcomponents/CmsAddProjectSoftwareSection';

import UniversalSelectComponent from '../../universal-select-component/UniversalSelectComponent';
import { ReduxProjFormActions } from '../../../redux/redux-subreducers/redux-project-form/actions';


const ChooseSoftwareSelectSoftName: React.FC = (): JSX.Element => {

    const { projectDataForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { iteration, ifError } = useContext<Partial<SoftwareContextTypes>>(SoftwareContext);

    const mergedRemoveDuplicates = useGenerateSoftwareNameSelectBoxes();
    const dispatcher = useDispatch();

    const generateOptions = mergedRemoveDuplicates.map(({ softwareShortName, softwareFullName }) => (
        <option
            key = {softwareShortName}
            value = {softwareFullName}
        >
            {Webpage.htmlDecodingParser(softwareFullName)}
        </option>
    ));

    const handleChangeSelectElement = ({ target }: React.ChangeEvent<HTMLSelectElement>): void => {
        const findShort = mergedRemoveDuplicates.find(soft => soft.softwareFullName === target.value)!;
        dispatcher(ReduxProjFormActions.changleProjectFormSoftName(iteration!, target.value, findShort.softwareShortName));
    };

    return (
        <UniversalSelectComponent
            textLabel = 'Software name'
            iteration = {iteration}
            ifError = {ifError!}
            allOptionsArray = {generateOptions}
            selectValue = {projectDataForm.usedSoftware[iteration!].software.softwareFullName}
            onChangeCallback = {handleChangeSelectElement}
        />
    );
};

export default ChooseSoftwareSelectSoftName;