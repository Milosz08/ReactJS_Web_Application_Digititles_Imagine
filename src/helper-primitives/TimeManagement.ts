/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: TimeManagement.ts
 * Last modified: 24/02/2022, 14:19
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

import { MAX_INACTIVITY_TIME } from '../components/cms-session-sequencer/CmsSessionSequencer.config';

class TimeManagement {

    public static generateCopyDate(): string {
        const date = new Date().getFullYear();
        return date === 2020 ? String(date) : `${2020}-${date}`;
    };

    public static countFromUpToDown(counter: number): string {
        const fullSeconds = MAX_INACTIVITY_TIME * 60;
        const expireTime = fullSeconds - counter;

        const onlyMinutes = Math.floor(expireTime / 60);
        const onlyMinutesWithZero = onlyMinutes < 10 ? `0${onlyMinutes}` : onlyMinutes;

        const onlySeconds = expireTime - onlyMinutes * 60;
        const onlySecondsWithZero = onlySeconds < 10 ? `0${onlySeconds}` : onlySeconds;

        if (onlyMinutes >= 0) {
            return `${onlyMinutesWithZero < 0 ? '00' : onlyMinutesWithZero}:${onlySecondsWithZero}`;
        }
        return '00:00';
    };

}

export default TimeManagement;