/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesInitialFluidContent.styles.ts
 * Last modified: 07/03/2022, 02:11
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

import styled from 'styled-components';
import { footer_scroll_link_rs } from '../../styles/reset.styles';
import { BasicButtonWithBottomLine } from '../../styles/mixins.styles';

export const ServicesLeftContentElementsContainer = styled.section`
    width: 100%;
`;

export const ServicesLeftGettingStartedLink = styled(footer_scroll_link_rs)`
    ${BasicButtonWithBottomLine({ $isLeft: true, $color: 'cyanDark' })};
    display: inline-block;
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: 30px;
    ::after {
        height: 3px;
    }
`;