/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: fontfaces.styles.ts
 * Last modified: 21/02/2022, 20:04
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

import { createGlobalStyle } from 'styled-components';

const FontfacesStylesInjection = createGlobalStyle`
    @font-face {
        font-family: 'Overpass';
        src: local('Overpass'), url(${`${process.env.PUBLIC_URL}/asset-fonts/Overpass-Bold.ttf`});
        font-weight: 700;
    }
    @font-face {
        font-family: 'Signika';
        src: local('Signika'), url(${`${process.env.PUBLIC_URL}/asset-fonts/Signika-Light.ttf`});
        font-weight: 300;
    }
    @font-face {
        font-family: 'Signika';
        src: local('Signika'), url(${`${process.env.PUBLIC_URL}/asset-fonts/Signika-Regular.ttf`});
        font-weight: 400;
    }
    @font-face {
        font-family: 'Signika';
        src: local('Signika'), url(${`${process.env.PUBLIC_URL}/asset-fonts/Signika-Medium.ttf`});
        font-weight: 500;
    }
    @font-face {
        font-family: 'Signika';
        src: local('Signika'), url(${`${process.env.PUBLIC_URL}/asset-fonts/Signika-SemiBold.ttf`});
        font-weight: 600;
    }
    @font-face {
        font-family: 'Signika';
        src: local('Signika'), url(${`${process.env.PUBLIC_URL}/asset-fonts/Signika-Bold.ttf`});
        font-weight: 700;
    }
`;

export default FontfacesStylesInjection;