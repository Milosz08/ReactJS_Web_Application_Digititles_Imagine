/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: mainPageAnimTitlesObject.ts
 * Last modified: 25/02/2022, 02:44
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

export enum Position {
    TOP = 'top',
    CENTER = 'center',
    BOTTOM = 'bottom'
}

export interface MainPageAnimTitlesTypes {
    ariaLabel: Position;
    content: string[];
}

export const MainPageAnimTitlesObject: MainPageAnimTitlesTypes[] = [
    {
        ariaLabel: Position.TOP,
        content: [
            'Professional designers',
            'Main & End credits',
            'Fast delivery time'
        ],
    },
    {
        ariaLabel: Position.CENTER,
        content: [
            'who appreciate',
            'or subtitles tailored to',
            'and attractive prices'
        ],
    },
    {
        ariaLabel: Position.BOTTOM,
        content: [
            'clean and modern style',
            'specific project',
            'for all filmmakers'
        ],
    },
];