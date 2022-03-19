/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GettingStartedFormStructure.tsx
 * Last modified: 13/03/2022, 13:08
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

import useValidateFooterForm from '../../hooks/footer/useValidateFooterForm';

import { RootState } from '../../redux/store';

import { ReduxAPIThunk } from '../../redux/redux-api-thunk/thunk';
import { AllFormsTypes } from '../../redux/redux-api-thunk/types';
import { ReduxAPIActions } from '../../redux/redux-api-thunk/actions';
import { JavaApiEndpoints } from '../../redux/redux-api-thunk/request';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import { ActiveAction } from '../../redux/redux-dom-manipulate/types';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';

import { GettingStartedFormStructureContainer } from './GettingStartedFormStructure.styles';

import FormTypeServiceSection from './subcomponents/FormTypeServiceSection';
import FormSizeTypeSection from './subcomponents/FormSizeTypeSection';
import FormBudgetSection from './subcomponents/FormBudgetSection';
import FormRegistrationSection from './subcomponents/FormRegistrationSection';


interface PropsProvider {
    referential: React.MutableRefObject<any>;
}

const GettingStartedFormStructure: React.FC<PropsProvider> = ({ referential }): JSX.Element => {

    const { registrationForm }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);
    const { username, lastname, email, message, serviceType, filmmakerSize, filmmakerBudget } = registrationForm;

    const validateForm = useValidateFooterForm({ typeofForm: AllFormsTypes.REGISTRATION });
    const dispatcher = useDispatch();

    const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validateForm()) {
            const returnedObject = {
                username, lastname, email, message, propertiesData: { serviceType, filmmakerSize, filmmakerBudget },
            };
            dispatcher(ReduxAPIThunk.addPageFormToDatabase(
                returnedObject, AllFormsTypes.REGISTRATION, JavaApiEndpoints.REGISTRATION, {}
            ));
            dispatcher(ReduxAPIActions.clearAllRegistrationForm());
        }
    };
    
    useEffect(() => {
        return () => {
            dispatcher(ReduxDOMActions.activeElementIntoArray(null, ActiveAction.REMOVE_ALL));
            dispatcher(ReduxAPIActions.clearAllRegistrationForm());    
        };
    }, [ dispatcher ]);

    return (
        <GettingStartedFormStructureContainer
            noValidate = {true}
            onSubmit = {handleSubmitForm}
            ref = {referential}
        >
            <FormTypeServiceSection/>
            <FormSizeTypeSection/>
            <FormBudgetSection/>
            <FormRegistrationSection/>
        </GettingStartedFormStructureContainer>
    );
};

export default GettingStartedFormStructure;