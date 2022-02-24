/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: WebpageTitle.ts
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

export class WebpageTitle {

    private static readonly DEF_PREFIX: string = 'Digititles Imagine | ';
    private static readonly ADMIN_PREFIX: string = 'CMS Panel | ';

    public static setTitle(type: string, ifAdminPanel: boolean) {
        return ifAdminPanel ? WebpageTitle.ADMIN_PREFIX + type : WebpageTitle.DEF_PREFIX + type;
    };

}