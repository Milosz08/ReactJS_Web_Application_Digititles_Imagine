/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Utils.ts
 * Last modified: 22/02/2022, 15:03
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

import { ReduxDOMstateKeys, ReduxDOMreducerTypes } from './redux-dom-manipulate/types';


class Utils {

    private static readonly DEF_SUFFIX = ' > ';

    public static addSuffix(type: ReduxDOMreducerTypes, suffix: ReduxDOMstateKeys | string): string {
        return type + Utils.DEF_SUFFIX + suffix;
    };

    public static normalised(type: ReduxDOMreducerTypes): string {
        if (type.includes(Utils.DEF_SUFFIX)) {
            return type.substring(0, type.lastIndexOf(Utils.DEF_SUFFIX));
        }
        return type;
    }

    public static reduceReducers(...reducers: any) {
        return (previous: any, current: any) => (
            reducers.reduce(
                (p: any, r: any) => r(p, current),
                previous
            )
        );
    };

    public static removeLastElementFromArray(array: any[], index: number): any[] {
        const arrayWithoutLastElement = [ ...array ];
        arrayWithoutLastElement.splice(index, 1);
        return arrayWithoutLastElement;
    };
}

export default Utils;