/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CookiesNotification.tsx
 * Last modified: 18/03/2022, 17:28
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

import { AllCookies } from '../../context/cookies-context/allCookiesConfig';
import { AllCookiesContext, AllCookiesTypes } from '../../context/cookies-context/AllCookiesProvider';

import useCookiesNotificationSetDynamicHeight from '../../hooks/cookies-notification/useCookiesNotificationSetDynamicHeight';

import { CookiesNotificationContainer, CookiesNotificationsCookieIcon } from './CookiesNotification.styles';

import CookiesNotificationTextContent from './subcomponents/CookiesNotificationTextContent';
import CookiesNotificationButton from './subcomponents/CookiesNotificationButton';


const CookiesNotification: React.FC = (): JSX.Element => {

    const { cookie } = useContext<Partial<AllCookiesTypes>>(AllCookiesContext);

    const [ cookieNotifRef, ifMenuOpen ] = useCookiesNotificationSetDynamicHeight();

    return (
        <CookiesNotificationContainer
            ref = {cookieNotifRef}
            $ifMenuIsOpen = {ifMenuOpen}
            $ifOpen = {!Boolean(cookie![AllCookies.COOKIE_POPUP])}
        >
            <CookiesNotificationsCookieIcon/>
            <CookiesNotificationTextContent/>
            <CookiesNotificationButton/>
        </CookiesNotificationContainer>
    );
};

export default CookiesNotification;