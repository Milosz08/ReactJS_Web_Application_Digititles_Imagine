/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useFixedFlickedComponentOnLoad.ts
 * Last modified: 25/02/2022, 04:02
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

import { useEffect, useState } from 'react';

/**
 * Custom hook reponsible for fixed flickering element on load page (enable visibility after render all
 * React virtual DOM structure)
 *
 * @return { boolean } - show/hide flag.
 */
const useFixedFlickedComponentOnLoad = () => {

    const [ hide, setHide ] = useState(true);

    useEffect(() => {
        setTimeout(() => setHide(false), 400);
    }, []);

    return hide;
};

export default useFixedFlickedComponentOnLoad;