/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: SingleServiceShowHideBlock.tsx
 * Last modified: 27/02/2022, 00:42
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

import useMouseMove from '../../../hooks/background-images/useMouseMove';
import useClickAndSelectActiveImage from '../../../hooks/background-images/useClickAndSelectActiveImage';

import { RoutingPaths } from '../../../static/appRouting';
import { MainPageServicesBlocksTypes } from '../../../static/mainPageServicesBlocks';

import {
    MultipleHidingContentSingleBoxWrapper, MultipleShowHideSingleBoxWrapper, SingleBoxWrapper, SingleShowHideBoxButton,
    SingleShowHideBoxCrossIndicator, SingleShowHideBoxHeader, SingleShowHideBoxServicesLink
} from '../MainPageServices.styles';

import ParagraphElement from '../../universal-components/ParagraphElement';


interface PropsProvider {
    boxElement: MainPageServicesBlocksTypes;
}

const SingleServiceShowHideBlock: React.FC<PropsProvider> = ({ boxElement }): JSX.Element => {

    const [ ifActive, handleClickBoxElement ] = useClickAndSelectActiveImage(boxElement.activeImage);
    const handleMouseEvent = useMouseMove(boxElement.activeImage);

    return (
        <MultipleShowHideSingleBoxWrapper
            $ifActive = {ifActive}
            onMouseEnter = {handleMouseEvent}
            onMouseLeave = {handleMouseEvent}
        >
            <SingleBoxWrapper>
                <SingleShowHideBoxButton
                    onClick = {handleClickBoxElement}
                >
                    <SingleShowHideBoxHeader>
                        {boxElement.name}
                    </SingleShowHideBoxHeader>
                    <SingleShowHideBoxCrossIndicator
                        $ifActive = {ifActive}
                    />
                </SingleShowHideBoxButton>
                <MultipleHidingContentSingleBoxWrapper>
                    <ParagraphElement>
                        {boxElement.description}
                    </ParagraphElement>
                    <SingleShowHideBoxServicesLink
                        to = {RoutingPaths.SERVICES}
                    >
                        Learn more
                    </SingleShowHideBoxServicesLink>
                </MultipleHidingContentSingleBoxWrapper>
            </SingleBoxWrapper>
        </MultipleShowHideSingleBoxWrapper>
    );
};

export default SingleServiceShowHideBlock;