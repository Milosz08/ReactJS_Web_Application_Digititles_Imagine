/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: gettingStartedContent.ts
 * Last modified: 13/03/2022, 23:39
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

export interface GettingStartedContentTypes {
    header: string;
    blocks: string[];
}

export const GettingStartedContent: { [key: string]: GettingStartedContentTypes } = {
    service: {
        header: 'How can we help you',
        blocks: [
            'main credits', 'end credits', 'subtitles'
        ],
    },
    size: {
        header: 'What kind of filmmaker are you',
        blocks: [
            'small', 'medium', 'large',
        ],
    },
};

export enum GettingStartedTypes {
    SERVICE = 'service',
    SIZE = 'size',
}

export const FILMMAKER_MIN_SMALL: number = 25;
export const FILMMAKER_MIN_MEDIUM: number = 100;
export const FILMMAKER_MIN_LARGE: number = 500;

export const FILMMAKER_MAX: number = 5000;

export const TEXTARE_MIN_SINGS: number = 10;
export const TEXTAREA_MAX_SIGNS: number = 300;
