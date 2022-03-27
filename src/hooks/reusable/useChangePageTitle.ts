/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangePageTitle.ts
 * Last modified: 22/02/2022, 19:31
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

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { Webpage } from '../../helper-primitives/Webpage';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

/**
 * Custom hook responsible for setting page title immediately after virtual DOM will build.
 *
 * @param title { string } - title to set.
 * @param ifAdminPanel { boolean } - flag decided, if it is admin panel.
 * @param redir { string? } - title setting on unmount component (optional).
 */
const useChangePageTitle = (title: string, ifAdminPanel: boolean, redir?: string): null => {

    const { status }: InitStateAPItypes = useSelector((state: RootState) => state.reduxReducerAPI);

    useEffect(() => {
        let titleLoading: string = title;
        if (!Object.keys(status).every(loading => !status[loading])) {
            titleLoading = 'Loading...';
        }
        if (Boolean(title)) {
            document.title = Webpage.setTitle(titleLoading, ifAdminPanel);
        }
        return () => {
            if (Boolean(redir)) {
                document.title = Webpage.setTitle(redir!, ifAdminPanel);
            }
            document.title = Webpage.setTitle('Main, End credits & Subtitles', ifAdminPanel);
        };
    }, [ status, ifAdminPanel, redir, title ]);

    return null;
};

export default useChangePageTitle;