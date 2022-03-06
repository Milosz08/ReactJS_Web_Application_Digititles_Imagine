/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: types.ts
 * Last modified: 01/03/2022, 23:42
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

export enum ReduxAPIreducerTypes {
    ADD_ELEMENT_FROM_DB = 'ADD_ELEMENT_FROM_DB__T',
    ADD_ALL_ELEMENTS_FROM_DB = 'ADD_ALL_ELEMENTS_FROM_DB',
    EDIT_ELEMENT_FROM_DB = 'EDIT_ELEMENT_FROM_DB__T',
    DELETE_ELEMENT_FROM_DB = 'DELETE_ELEMENT_FROM_DB__T',
    SET_REQUEST_ERROR = 'SET_REQUEST_ERROR__T',
    SET_REQUEST_LOADING = 'SET_REQUEST_LOADING__T',
}

export enum ReduxAPIstateKeys {
    PROJECTS = 'projects',
    IMAGES = 'projectsPhotos',
    LOADING_PROJECTS = 'loadingProjects',
    LOADING_IMAGES = 'loadingImages',
}