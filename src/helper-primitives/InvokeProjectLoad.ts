/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: InvokeProjectLoad.ts
 * Last modified: 22/02/2022, 16:36
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

class InvokeProjectLoad {

    /**
     * Method responsible for forced go to top page on reload (unecessary for prevent
     * bugs in animations).
     */
    public static gotoTopOnReload(): void {
        window.onbeforeunload = () => window.scrollTo(0, 0);
    };

    /**
     * Method responsible for disable animations on resize event listener.
     */
    public static disableAnimationsOnResize(): void {
        let resizeTimer: NodeJS.Timeout;
        const CLASS_TOGGLE: string = 'stop--transitions';
        const listenerOnResize = () => {
            document.body.classList.add(CLASS_TOGGLE);
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout((): void => {
                document.body.classList.remove(CLASS_TOGGLE);
            }, 400);
        };
        window.addEventListener('resize', listenerOnResize);
    };

    /**
     * Method responsible for add class to document body element which disabling page scrolling.
     *
     * @param listenerValue { boolean } - flag decided, if body is scrollable or not.
     */
    public static disableEnableScrolling(listenerValue: boolean): void {
        const CLASS_DISABLE: string = 'disable--scroll';
        if (listenerValue) {
            document.body.classList.add(CLASS_DISABLE);
        } else {
            document.body.classList.remove(CLASS_DISABLE);
        }
    };

}

export default InvokeProjectLoad;