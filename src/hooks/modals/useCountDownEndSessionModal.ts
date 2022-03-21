/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useCountDownEndSessionModal.ts
 * Last modified: 21/03/2022, 18:27
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
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';

import { MODAL_REMAIN_SECONDS } from '../../components/cms-session-sequencer/CmsSessionSequencer.config';

/**
 * Custom hook responsible for generate countdown in end session modal element.
 *
 * @param initialValue { number } - initial countdown value.
 * @param logoutCallback { () => void } - callback function run on end countdown.
 * @return { number } - current countdown value.
 */
const useCountDownEndSessionModal = (initialValue: number, logoutCallback: () => void): number => {

    const { modalsState }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const [ timer, setTimer ] = useState<number>(initialValue);

    useEffect(() => {
        let intervalIndex: NodeJS.Timeout;
        let toLogoutCounter: number = MODAL_REMAIN_SECONDS;
        const autoWarning = new Audio(`${process.env.PUBLIC_URL}/asset-audio/session-warning.mp3`);
        if (modalsState.ifEndSessionModalOpen) {
            const logoutAsyncCounting = (): void => {
                if (toLogoutCounter % 5 === 0) {
                    autoWarning.play().then(r => r);
                }
                setTimer(toLogoutCounter--);
                if (toLogoutCounter < 0) {
                    logoutCallback();
                    setTimer(initialValue);
                    toLogoutCounter = 0;
                    clearInterval(intervalIndex);
                }
            };
            intervalIndex = setInterval(logoutAsyncCounting, 1000);
        }
        return () => {
            clearInterval(intervalIndex);
            setTimeout(() => setTimer(initialValue), 1000);
        }
    }, [ initialValue, logoutCallback, modalsState.ifEndSessionModalOpen ]);

    return timer;
};

export default useCountDownEndSessionModal;