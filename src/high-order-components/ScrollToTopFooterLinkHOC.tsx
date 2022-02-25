/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ScrollToTopFooterLinkHOC.tsx
 * Last modified: 24/02/2022, 04:20
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
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { Gsap } from '../helper-primitives/GsapAnimations';

import { RootState } from '../redux/store';
import { InitStateDOMtypes } from '../redux/redux-dom-manipulate/initialState';


interface PropsProvider {
    to: string;
}

/**
 * High Order Component resposible for generate animation sequence, when user click footer linkable button, which
 * transport him into specific URL path (based hook param).
 *
 * @param to { string } - move url address.
 */
const ScrollToTopFooterLinkHOC: React.FC<PropsProvider> = ({ to, ...rest }): JSX.Element => {

    const { currScrollPos }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const [ click, setClick ] = useState<boolean>(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleClickLink = (e: React.ChangeEvent<any>): void => {
        e.preventDefault();
        if (pathname !== to) {
            setClick(true);
        }
    };

    useEffect((): void => {
        if (click) {
            Gsap.scrollIntoContext(document.documentElement);
        }
    }, [ click ]);

    useEffect((): void => {
        if (click) {
            if (currScrollPos === 0) {
                setTimeout(() => navigate({ pathname: to }), 500);
                setClick(false);
            }
        }
    }, [ currScrollPos, navigate ]);

    return (
        <Link {...rest} to = {to} onClick = {handleClickLink}/>
    );
};

export default ScrollToTopFooterLinkHOC;