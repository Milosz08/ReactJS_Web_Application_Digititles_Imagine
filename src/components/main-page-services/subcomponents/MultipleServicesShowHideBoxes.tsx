/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: MultipleServicesShowHideBoxes.tsx
 * Last modified: 27/02/2022, 00:56
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

import SingleServiceShowHideBlock from './SingleServiceShowHideBlock';
import { mainPageServicesBlocks } from '../../../static/mainPageServicesBlocks';

import { MultipleShowHideBoxesContainer } from '../MainPageServices.styles';


const MultipleServicesShowHideBoxes: React.FC = (): JSX.Element => {

    const generateBoxesStructure: JSX.Element[] = mainPageServicesBlocks.map(boxObject => (
        <SingleServiceShowHideBlock
            key = {boxObject.description}
            boxElement = {boxObject}
        />
    ));

    return (
        <MultipleShowHideBoxesContainer>
            {generateBoxesStructure}
        </MultipleShowHideBoxesContainer>
    );
};

export default MultipleServicesShowHideBoxes;