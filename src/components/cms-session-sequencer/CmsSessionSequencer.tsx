/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsSessionSequencer.tsx
 * Last modified: 21/03/2022, 17:21
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

import { RootState } from '../../redux/store';

import { AllModals } from '../../redux/redux-dom-manipulate/types';
import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

import { ReduxAPIActions } from '../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import { ACTIVITY_EVENTS, MAX_INACTIVITY_TIME } from './CmsSessionSequencer.config';


const CmsSessionSequencer: React.FC = (): null => {

    const { modalsState }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { sessionInfo }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    
    const dispatcher = useDispatch();

    useEffect(() => {
        let index: NodeJS.Timeout;
        let secondsSinceLastActivity: number = 0;
        const maxInactivity: number = (60 * MAX_INACTIVITY_TIME);

        ACTIVITY_EVENTS.forEach(event => document.addEventListener(event, () => secondsSinceLastActivity = 0, true));

        const asyncCountingSession = (): void => {
            // dispatcher(ReduxAPIActions.setSessionCounter(++secondsSinceLastActivity)); <----- enable this line on production
            if (secondsSinceLastActivity > maxInactivity) {
                dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.END_SESSION, true));
                secondsSinceLastActivity = 0;
                clearInterval(index);
            }
        };

        if (sessionInfo.ifLogged && !modalsState.ifEndSessionModalOpen) {
            index = setInterval(asyncCountingSession, 1000);
        }
        
        return () => {
            clearInterval(index);
            secondsSinceLastActivity = 0;
        };
    }, [ sessionInfo.ifLogged, modalsState.ifEndSessionModalOpen, dispatcher ]);

    return null;
};

export default CmsSessionSequencer;