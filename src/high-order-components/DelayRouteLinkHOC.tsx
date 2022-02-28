/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: DelayRouteLinkHOC.tsx
 * Last modified: 25/02/2022, 01:04
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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ReduxDOMActions } from '../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../redux/redux-dom-manipulate/types';


interface PropsProvider {
    to: string;
    delay?: number;
    forceScroll?: boolean;
}

/**
 * High Order Component responsible for delay Link element from react-router package.
 *
 * @param delay { number? } - goto address delay value (in miliseconds, by default: 10 miliseconds).
 * @param forceScroll { boolean? } - flag decided, if next load page should be from 0 top position (by default: false).
 * @param to { string } - next page path to load after delay.
 */
const DelayRouteLinkHOC: React.FC<PropsProvider> = ({ delay, forceScroll, to, ...rest }): JSX.Element => {

    let timeout: NodeJS.Timeout | null = null;

    const navigate = useNavigate();
    const location = useLocation();
    const dispatcher = useDispatch();

    useEffect(() => {
        return () => {
            if (Boolean(timeout)) {
                clearTimeout(timeout!);
            }
        };
    }, [ timeout ]);

    const handleClick = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        if (location.pathname === to) {
            return;
        }
        dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.WHILE_CHANGING_ROUTE, true));
        if (forceScroll) {
            window.scrollTo(0, 0);
        }
        timeout = setTimeout((): void => {
            navigate({ pathname: to });
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.WHILE_CHANGING_ROUTE, false));
        }, delay || 10);
    };

    return (
        <Link {...rest} to = {to} onClick = {handleClick}/>
    );
};

export default DelayRouteLinkHOC;