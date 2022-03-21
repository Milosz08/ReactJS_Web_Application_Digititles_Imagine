/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useClickHamburgerButton.ts
 * Last modified: 23/02/2022, 16:55
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
import { useLocation, useNavigate } from 'react-router-dom';

import { RoutingPaths } from '../../static/appRouting';

import useDidMount from '../reusable/useDidMount';
import useDisableScroll from '../reusable/useDisableScroll';

import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { AllModals, ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook responsible for handling hamburger button click event. If page is main (absolute address),
 * then returned function open menu. Otherwise, function returned to specified patch.
 *
 * @return { [ boolean, (e: React.ChangeEvent<any>) => void ] } - first parameter: if patch is absolute,
 *         second parameter: function callback.
 */
const useClickHamburgerButton = (ifMenuOpen: boolean): [ boolean, (e: React.ChangeEvent<any>) => void ] => {

    const [ blockScroll, allowScroll ] = useDisableScroll();
    const isMount = useDidMount();
    const dispatcher = useDispatch();

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleOpenCloseMenu = (e: React.ChangeEvent<any>): void => {
        e.preventDefault();
        if (pathname === RoutingPaths.START) {
            ifMenuOpen ? blockScroll() : allowScroll();
            dispatcher(ReduxDOMActions.openCloseMainMenu());
        } else if (pathname.includes(RoutingPaths.ADMIN_PANEL)) {
            dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.WARNINNG_LOGOUT, true));
        } else {
            navigate({ pathname: RoutingPaths.START });
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.STILL_IMAGE, false));
            dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.HAM_ACTIVE, false));
        }
    };

    // disable/enable page scroll on change menu active/inactive
    useEffect(() => {
        if (!isMount) {
            ifMenuOpen ? blockScroll() : allowScroll();
        }
    }, [ ifMenuOpen ]);

    // change menu button look on different paths
    useEffect(() => {
        dispatcher(ReduxDOMActions.changeFirstLevelElement(
            ReduxDOMstateKeys.HAM_ACTIVE, pathname !== RoutingPaths.START
        ));
    }, [ dispatcher, pathname ]);

    return [ Boolean(pathname === RoutingPaths.START), handleOpenCloseMenu ];
};

export default useClickHamburgerButton;