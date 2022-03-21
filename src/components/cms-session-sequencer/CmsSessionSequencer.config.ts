/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsSessionSequencer.config.ts
 * Last modified: 21/03/2022, 17:22
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

/**
 * Maximum session time (inactivity on the part of the user). Exported variable.
 */
export const MAX_INACTIVITY_TIME: number = 10;

/**
 * Maximum modal open time (after this time, modal will be closed and user/administrator will be logout).
 */
export const MODAL_REMAIN_SECONDS: number = 30;

/**
 * String array that stores every possible event (user interaction with the page). Used to reset the timer.
 */
export const ACTIVITY_EVENTS: string[] = [
    'mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'
];