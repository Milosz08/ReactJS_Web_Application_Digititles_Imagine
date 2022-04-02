/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CookiesNotification.styles.ts
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

import styled from 'styled-components';
import { FaCookieBite } from 'react-icons/fa';

import { a_rs, button_rs } from '../../styles/reset.styles';
import { StandardButton } from '../../styles/mixins.styles';

export const CookiesNotificationContainer = styled.div<{ $ifMenuIsOpen: boolean, $ifOpen: boolean }>`
    position: fixed;
    display: ${({ $ifOpen }) => $ifOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--cyanDark);
    @media only screen and (max-width: 1030px) {
        transform: translateY(${({ $ifOpen }) => $ifOpen ? 0 : '-100vh'}) !important;
        height: 100vh;
        flex-direction: column;
    }
`;

export const CookiesNotificationsCookieIcon = styled(FaCookieBite)`
    font-size: 3rem;
    color: var(--whiteClean);
`;

export const CookiesNotificationsTextContainer = styled.div`
    max-width: 900px;
    width: 60%;
    margin: 0 40px;
    font-size: 1.1rem;
    color: var(--whiteClean);
    @media only screen and (max-width: 1030px) {
        margin: 20px 30px;
        width: calc(100% - 60px);
    }
`;

export const CookiesNotificationsButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    @media only screen and (max-width: 1030px) {
        height: fit-content;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 500px;
        width: 100%;
    }
`;

export const CookiesNotificationButtonElement = styled(button_rs)`
    ${StandardButton()};
    font-size: 1.1rem;
    background-color: var(--cyanLight);
    padding: 7px 20px 6px;
    margin-top: 5px;
    @media only screen and (max-width: 1030px) {
        height: fit-content;
        margin-top: 0;
    }
`;

export const CookiesNotificationLinkElement = styled(a_rs)`
    ${StandardButton()};
    font-size: 1.1rem;
    background-color: var(--whiteClean);
    color: var(--cyanDark);
    text-align: center;
    margin-bottom: 5px;
    :hover {
        color: var(--cyanDark);
        background-color: var(--whiteDark);
    }
    padding: 7px 20px 6px;
    @media only screen and (max-width: 1030px) {
        height: fit-content;
        margin-bottom: 0;
    }
`;