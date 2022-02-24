/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useDidMount.ts
 * Last modified: 22/02/2022, 19:13
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

import { useEffect, useRef } from 'react';

/**
 * Custom hook responsible for set info about mounting component (first build or re-mount).
 *
 * @return { boolean } - if component is mounted.
 */
const useDidMount = (): boolean => {

    const isMountRef = useRef(true);

    useEffect((): void => {
        isMountRef.current = false;
    }, []);

    return isMountRef.current;
};

export default useDidMount;