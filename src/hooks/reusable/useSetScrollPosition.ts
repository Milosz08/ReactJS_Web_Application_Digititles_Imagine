/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useSetScrollPosition.ts
 * Last modified: 23/02/2022, 17:20
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
import { useDispatch } from 'react-redux';

import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';

/**
 * Custom hook responsible for setting scroll from top and from bottom position in redux store.
 */
const useSetScrollPosition = (): null => {

    const dispatcher = useDispatch();

    useEffect((): void => {
        const scrollListener = (): void => {
            const scrollFromTop = document.documentElement.scrollTop;
            const scrollFromBottom = document.documentElement.offsetHeight - window.innerHeight - scrollFromTop;
            dispatcher(ReduxDOMActions.setScrollPositions(scrollFromTop, scrollFromBottom));
        };
        window.addEventListener('scroll', scrollListener);
    }, [ dispatcher ]);

    return null;
};

export default useSetScrollPosition;