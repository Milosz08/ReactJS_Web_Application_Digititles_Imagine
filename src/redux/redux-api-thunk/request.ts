/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: request.ts
 * Last modified: 02/03/2022, 00:14
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

import axios from 'axios';

export enum JavaApiEndpoints {
    USER_MESSAGES = 'user-messages',
    AUTHENTICATIONS = 'authentications',
    PROJECTS = 'projects',
    REGISTRATION = 'registration',
    PHOTOS = 'photos',
}

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/javabean/app/',
});