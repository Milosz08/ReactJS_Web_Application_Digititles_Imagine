/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: nextElementProps.ts
 * Last modified: 11/03/2022, 00:42
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

export interface NextElementPropTypes {
    header: string | null;
    aside: string;
    pathTo: string | null;
    dotColor?: string | null;
}

export const NextElementProps: { [key: string]: NextElementPropTypes } = {
    projects: {
        header: 'projects',
        aside: 'check out for',
        pathTo: '/projects',
    },
    services: {
        header: 'services',
        aside: 'check out for',
        pathTo: '/services',
    },
    project: {
        header: null,
        aside: 'next project',
        pathTo: null,
        dotColor: null,
    }
};