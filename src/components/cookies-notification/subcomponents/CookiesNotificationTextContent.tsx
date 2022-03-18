/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CookiesNotificationTextContent.tsx
 * Last modified: 18/03/2022, 22:27
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

import { CookiesNotificationsTextContainer } from '../CookiesNotification.styles';


const CookiesNotificationTextContent: React.FC = (): JSX.Element => (
    <CookiesNotificationsTextContainer>
        Sites under Digititles logo used cookies to remember your preferences and improve our products, to deliever
        interests-based advertising. You will not provide third-party on our websites that are not created and provided
        by our website. This gives you complete browsing security and guarantees convenience from the use of the site.
    </CookiesNotificationsTextContainer>
);

export default CookiesNotificationTextContent;