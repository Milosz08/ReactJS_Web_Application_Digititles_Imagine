/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: BudgetRangeInput.tsx
 * Last modified: 14/03/2022, 16:30
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    FILMMAKER_MAX, FILMMAKER_MIN_LARGE, FILMMAKER_MIN_MEDIUM, FILMMAKER_MIN_SMALL
} from '../../../../static/gettingStartedContent';

import { RootState } from '../../../../redux/store';
import { ReduxAPIActions } from '../../../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../../../redux/redux-api-thunk/initialState';
import { RegistrationFormFields, RegistrationFormInputs } from '../../../../redux/redux-api-thunk/types';

import {
    GettingStartedBudgetPriceIndicator, GettingStartedBudgetRangeInput, GettingStartedBudgetRangeLabel
} from './BudgetRangeInput.styles';


const BudgetRangeInput: React.FC = (): JSX.Element => {

    const { registrationForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    const { filmmakerBudget, filmmakerSize: size } = registrationForm;
    const { MEDIUM, LARGE } = RegistrationFormFields;

    const definePrice = size === LARGE ? FILMMAKER_MIN_LARGE : size === MEDIUM ? FILMMAKER_MIN_MEDIUM : FILMMAKER_MIN_SMALL;
    const dispatcher = useDispatch();

    const handleSetFilmmakerBudgetValue = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatcher(ReduxAPIActions.setFieldInRegistrationForm(
            RegistrationFormInputs.FILMMAKER_BUDGET, parseInt(target.value)
        ));
    };

    useEffect(() => {
        dispatcher(ReduxAPIActions.setFieldInRegistrationForm(RegistrationFormInputs.FILMMAKER_BUDGET, definePrice));
    }, [ definePrice, dispatcher, size ]);
    
    return (
        <GettingStartedBudgetRangeLabel
            htmlFor = 'price'
        >
            <GettingStartedBudgetRangeInput
                type = 'range'
                value = {filmmakerBudget}
                onChange = {handleSetFilmmakerBudgetValue}
                min = {definePrice}
                max = {FILMMAKER_MAX}
                id = 'price'
            />
            <GettingStartedBudgetPriceIndicator>
                ${filmmakerBudget}
            </GettingStartedBudgetPriceIndicator>
        </GettingStartedBudgetRangeLabel>
    );
};

export default BudgetRangeInput;