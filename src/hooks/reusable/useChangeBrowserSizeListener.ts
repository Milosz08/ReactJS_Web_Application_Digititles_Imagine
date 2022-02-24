/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useChangeBrowserSizeListener.ts
 * Last modified: 24/02/2022, 20:26
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

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';

/**
 * Custom hook responsible for listening changes in browser sizes and save these changes into redux state.
 */
const useChangeBrowserSizeListener = () => {

    const dispatcher = useDispatch();

    useEffect(() => {
        const handleResizeListener = () => {
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;
            dispatcher(ReduxDOMActions.setBrowserSizes(width, height));
        };
        window.addEventListener('resize', handleResizeListener, true);
    }, [ dispatcher ]);

};

export default useChangeBrowserSizeListener;