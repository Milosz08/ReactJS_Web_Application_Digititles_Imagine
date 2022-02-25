/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: BackgroundFluidImage.tsx
 * Last modified: 25/02/2022, 10:27
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
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RoutingPaths } from '../../static/appRouting';
import useShowHideBackgroundImage from '../../hooks/background-images/useShowHideBackgroundImage';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

import {
    BackgroundFluidImageContainer, BackgroundFluidImageStyles, BackgroundFluidImageTriangle
} from './BackgroundFluidImage.styles';


const BackgroundFluidImage: React.FC = (): JSX.Element => {

    const { ifFixed }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { pathname } = useLocation();

    const absolutePath: boolean = pathname === RoutingPaths.START;
    const [ imageRef, triangleRef ] = useShowHideBackgroundImage({ invokePx: 200, ifShowOnLoad: !absolutePath });

    return (
        <BackgroundFluidImageContainer
            $ifFixed = {ifFixed}
        >
            <BackgroundFluidImageTriangle
                $ifVisible = {absolutePath}
                ref = {triangleRef}
            />
            <BackgroundFluidImageStyles
                src = {`${process.env.PUBLIC_URL}/asset-images/backgroundfluidimage.svg`}
                ref = {imageRef}
            />
        </BackgroundFluidImageContainer>
    );
};

export default BackgroundFluidImage;