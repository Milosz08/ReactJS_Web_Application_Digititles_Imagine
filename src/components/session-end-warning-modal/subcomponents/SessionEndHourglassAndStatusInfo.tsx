/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: SessionEndHourglassAndStatusInfo.tsx
 * Last modified: 21/03/2022, 18:17
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

import * as React from 'react';
import { useContext } from 'react';

import useHourglassAnimation from '../../../hooks/modals/useHourglassAnimation';
import useCountDownEndSessionModal from '../../../hooks/modals/useCountDownEndSessionModal';

import { CallbacklogoutContext, CallbackLogoutContextTypes } from '../SessionEndWarningModal';
import { MAX_INACTIVITY_TIME, MODAL_REMAIN_SECONDS } from '../../cms-session-sequencer/CmsSessionSequencer.config';

import { ModalHeader, ModalParagraph, ModalWarningIconContainer } from '../../../styles/modals.styles';


const SessionEndHourglassAndStatusInfo: React.FC = (): JSX.Element => {

    const { callbackLogout } = useContext<Partial<CallbackLogoutContextTypes>>(CallbacklogoutContext);

    const currentHourglass = useHourglassAnimation();
    const timer = useCountDownEndSessionModal(MODAL_REMAIN_SECONDS, callbackLogout!);

    return (
        <>
            <ModalWarningIconContainer>
                {currentHourglass}
            </ModalWarningIconContainer>
            <ModalParagraph>
                They were inactive for {MAX_INACTIVITY_TIME} minutes. In order to protect the system from data entry
                by unauthorized users, the system is logged out automatically.
            </ModalParagraph>
            <ModalHeader>
                After <strong>{timer}</strong> seconds system will you log out automatically
            </ModalHeader>
        </>
    );
};

export default SessionEndHourglassAndStatusInfo;