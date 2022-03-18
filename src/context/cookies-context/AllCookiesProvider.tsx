/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: AllCookiesProvider.tsx
 * Last modified: 18/03/2022, 17:16
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
import { createContext } from 'react';
import { useCookies } from 'react-cookie';

import { AllCookies } from './allCookiesConfig';

export interface AllCookiesTypes {
    cookie: { [p: string]: any };
    setCookie: (name: string, value: any, options?: (any | undefined)) => void;
    removeCookie: (name: string, options?: (any | undefined)) => void;
}


export const AllCookiesContext = createContext<Partial<AllCookiesTypes>>({});

interface PropsProvider {
    children: React.ReactNode;
}

const AllCookiesProvider: React.FC<PropsProvider> = ({ children }): JSX.Element => {

    const [ cookie, setCookie, removeCookie ] = useCookies(Object.keys(AllCookies).map(key => AllCookies[key]));

    return (
        <AllCookiesContext.Provider
            value = {{
                cookie, setCookie, removeCookie
            }}
        >
            {children}
        </AllCookiesContext.Provider>
    );
};

export default AllCookiesProvider;