/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: socialLinks.ts
 * Last modified: 24/02/2022, 23:55
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

import { GrFacebookOption } from 'react-icons/gr';
import { FaVimeoV, FaYoutube } from 'react-icons/fa';

interface SocialLinksProvider {
    path: string;
    ariaLabel: string;
    IconComponent: () => JSX.Element;
}

export const SocialLinks: SocialLinksProvider[] = [
    {
        path: 'https://www.youtube.com/channel/UC_AMnvvE7NQut0iEtpaf0jw',
        ariaLabel: 'Visit us on YouTube',
        IconComponent: () => <FaYoutube/>,
    },
    {
        path: 'https://vimeo.com/digititlesimagine',
        ariaLabel: 'Check us on Vimeo',
        IconComponent: () => <FaVimeoV/>,
    },
    {
        path: 'https://www.facebook.com/search/top?q=digititles%20imagine',
        ariaLabel: 'Visit us on Facebook',
        IconComponent: () => <GrFacebookOption/>,
    },
];