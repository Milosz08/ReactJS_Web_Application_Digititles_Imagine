/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CookiesHelpers.ts
 * Last modified: 18/03/2022, 18:10
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

export class CookiesHelpers {

    /**
     *
     *
     * @param expDays
     */
    public static setCookieExpires(expDays: number): Date {
        const date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        return date;
    };

    /**
     *
     *
     * @param initialInput
     * @param countOfValues
     */
    public static setCookieHash(initialInput: string = '00', countOfValues: number = 5): string {
        const generatePrefAndSuf = (initialString: string = ''): string => {
            let returnedString: string = initialString;
            for(let i = 0; i < countOfValues; i++) {
                returnedString += Math.floor(Math.random() * 256).toString(16);
            }
            return returnedString;
        };
        return `${generatePrefAndSuf()}${initialInput}${generatePrefAndSuf()}`;
    };

}