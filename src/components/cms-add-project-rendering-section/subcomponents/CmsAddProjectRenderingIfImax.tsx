/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectRenderingIfImax.tsx
 * Last modified: 08/04/2022, 01:47
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

import UniversalCheckboxInputComponent from '../../universal-checkbox-input-component/UniversalCheckboxInputComponent';


const CmsAddProjectRenderingIfImax: React.FC = (): JSX.Element => {

    const { projectDataForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const dispatcher = useDispatch();

    const ifImax = `This project was created with${projectDataForm.ifImax ? '' : 'out'} 
                    an IMAX&reg; digital cinema technology.`;

    const handleChangeIfImaxProperty = (): void => {
        dispatcher(ReduxAPIActions.insertProjectFormElement(ProjectFieldsKeys.IF_IMAX, !projectDataForm.ifImax));
    };

    return (
        <UniversalCheckboxInputComponent
            checkedValue = {projectDataForm.ifImax}
            htmlForId = 'change_imax_property'
            onChangeCallback = {handleChangeIfImaxProperty}
            checkboxMessage = {ifImax}
            ifProjectImax = {true}
        />
    );
};

export default CmsAddProjectRenderingIfImax;