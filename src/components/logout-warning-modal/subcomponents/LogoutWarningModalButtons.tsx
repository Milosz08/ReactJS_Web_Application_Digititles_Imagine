/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: LogoutWarningModalButtons.tsx
 * Last modified: 21/03/2022, 13:44
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

import { AllCookies } from '../../../context/cookies-context/allCookiesConfig';
import { AllCookiesContext, AllCookiesTypes } from '../../../context/cookies-context/AllCookiesProvider';

import { AllModals } from '../../../redux/redux-dom-manipulate/types';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { CmsCredentialsLevels } from '../../../redux/redux-api-thunk/types';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';

import { ModalButtonElement, ModalButtonsContainer } from '../../../styles/modals.styles';


const LogoutWarningModalButtons: React.FC = (): JSX.Element => {

    const { removeCookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);
    const dispatcher = useDispatch();

    const handleStayOrLoggedOut = (ifLogout: boolean): void => {
        if (ifLogout) {
            removeCookie!(AllCookies.BEARER_TOKEN);
            removeCookie!(AllCookies.CMS_SESSION);
            dispatcher(ReduxAPIActions.changeSessionInfo(false, CmsCredentialsLevels.UNDEFINED, ''));
        }
        dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.WARNINNG_LOGOUT, false));
    };

    return (
        <ModalButtonsContainer>
            <ModalButtonElement
                onClick = {handleStayOrLoggedOut.bind(null, true)}
                $ifHollow = {true}
            >
                Logout
            </ModalButtonElement>
            <ModalButtonElement
                onClick = {handleStayOrLoggedOut.bind(null, false)}
            >
                Stay Logged
            </ModalButtonElement>
        </ModalButtonsContainer>
    );
};

export default LogoutWarningModalButtons;