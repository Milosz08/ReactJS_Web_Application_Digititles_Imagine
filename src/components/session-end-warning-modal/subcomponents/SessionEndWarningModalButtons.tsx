/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: SessionEndWarningModalButtons.tsx
 * Last modified: 21/03/2022, 18:19
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

import { AllModals } from '../../../redux/redux-dom-manipulate/types';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';

import { CallbacklogoutContext, CallbackLogoutContextTypes } from '../SessionEndWarningModal';

import { ModalButtonElement, ModalButtonsContainer } from '../../../styles/modals.styles';


const SessionEndWarningModalButtons: React.FC = (): JSX.Element => {

    const { callbackLogout } = useContext<Partial<CallbackLogoutContextTypes>>(CallbacklogoutContext);
    const dispatcher = useDispatch();

    const handleCloseModalAndStayInSession = (): void => {
        dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.END_SESSION));
        dispatcher(ReduxAPIActions.setSessionCounter(0));
    };

    return (
        <ModalButtonsContainer>
            <ModalButtonElement
                onClick = {handleCloseModalAndStayInSession}
                $ifHollow = {true}
            >
                Stay in the system
            </ModalButtonElement>
            <ModalButtonElement
                onClick = {callbackLogout}
            >
                Log out
            </ModalButtonElement>
        </ModalButtonsContainer>
    );
};

export default SessionEndWarningModalButtons;