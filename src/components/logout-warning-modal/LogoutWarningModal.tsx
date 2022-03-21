/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: LogoutWarningModal.tsx
 * Last modified: 21/03/2022, 12:34
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
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { AllModals } from '../../redux/redux-dom-manipulate/types';

import { ModalHeader, ModalParagraph, ModalWarningIconContainer } from '../../styles/modals.styles';

import ModalStructureHOC from '../../high-order-components/ModalStructureHOC';
import LogoutWarningModalButtons from './subcomponents/LogoutWarningModalButtons';


const LogoutWarningModal: React.FC = (): JSX.Element => (
    <ModalStructureHOC
        selectedModal = {AllModals.WARNINNG_LOGOUT}
    >
        <ModalWarningIconContainer>
            <AiOutlineInfoCircle/>
        </ModalWarningIconContainer>
        <ModalHeader>
            Attempt to log out of the system
        </ModalHeader>
        <ModalParagraph>
            The attempt to log out from the system was recorded. If you want to log out of the system, click the
            button on the left. If you want to stay in the system, click the button on the right to close the window.
        </ModalParagraph>
        <LogoutWarningModalButtons/>
    </ModalStructureHOC>
);

export default LogoutWarningModal;