/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CookiesNotificationButton.tsx
 * Last modified: 18/03/2022, 22:03
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
import { CookiesHelpers } from '../../../context/cookies-context/CookiesHelpers';
import { AllCookiesContext, AllCookiesTypes } from '../../../context/cookies-context/AllCookiesProvider';

import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../../redux/redux-dom-manipulate/types';

import {
    CookiesNotificationButtonElement, CookiesNotificationLinkElement, CookiesNotificationsButtonsContainer
} from '../CookiesNotification.styles';


const CookiesNotificationButton: React.FC = (): JSX.Element => {

    const { cookie, setCookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);
    const dispatcher = useDispatch();

    const handleClick = (): void => {
        if (!Boolean(cookie![AllCookies.COOKIE_POPUP])) {
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.COOKIES_NOTIF_CONTAINER_HEIGHT, 0));
            setCookie!(AllCookies.COOKIE_POPUP, CookiesHelpers.setCookieHash('c', 8), {
                path: '/', expires: CookiesHelpers.setCookieExpires(365)
            });
        }
    };

    return (
        <CookiesNotificationsButtonsContainer>
            <CookiesNotificationLinkElement
                href = '/privacy-policy.html'
                target = '_blank'
            >
                Privacy Policy
            </CookiesNotificationLinkElement>
            <CookiesNotificationButtonElement
                title = 'Accept Cookies Privacy Policy terms and close window'
                onClick = {handleClick}
            >
                Accept Cookies
            </CookiesNotificationButtonElement>
        </CookiesNotificationsButtonsContainer>
    );
};

export default CookiesNotificationButton;