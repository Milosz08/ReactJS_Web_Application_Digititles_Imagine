/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Webpage.ts
 * Last modified: 24/02/2022, 16:39
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

export class Webpage {

    private static readonly DEF_PREFIX: string = 'Digititles Imagine | ';
    private static readonly ADMIN_PREFIX: string = 'CMS Panel | ';

    public static setTitle(type: string, ifAdminPanel: boolean): string {
        return ifAdminPanel ? Webpage.ADMIN_PREFIX + type : Webpage.DEF_PREFIX + type;
    };

    public static changeColorLumination(hexColor: string): string {
        let r = parseInt(hexColor.substring(1, 3), 16);
        let g = parseInt(hexColor.substring(3, 5), 16);
        let b = parseInt(hexColor.substring(5, 7), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return `var(--${yiq > 140 ? 'blackDark' : 'whiteDark'})`;
    };

    public static htmlDecodingParser(stringToDecode: string): string {
        const parser = new DOMParser();
        return parser.parseFromString(`<!doctype html><body>${stringToDecode}`, 'text/html').body.textContent!;
    };

    public static convertPathnameToCmsHeader(pathname: string): string {
        const insertFromLastBackslash = pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
        return insertFromLastBackslash.replaceAll('-', ' ');
    };

    public static changePathToPathsArray(pathname: string): { name: string, path: string }[] {
        const allPathnames = pathname.replaceAll('-', ' ').split('/').filter(el => el);
        const allPaths = pathname.split('/').filter(el => el);
        let previousPath = '';
        const allPathsArray = allPaths.map((path, idx) => {
            let string = path;
            if (idx > 0) {
                string = `${previousPath}/${string}`;
            }
            previousPath = string;
            return string;
        });
        return allPathnames.map((el, idx) => ({ name: el, path: `/${allPathsArray[idx]}` }));
    };

    public static capitalisedWord(stringSequence: string): string {
        const firstChar = stringSequence.charAt(0);
        const restOfSequence = stringSequence.substring(1);
        return firstChar.toLocaleUpperCase() + restOfSequence.toLocaleLowerCase();
    };

}