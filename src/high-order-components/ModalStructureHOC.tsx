/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ModalStructureHOC.tsx
 * Last modified: 21/03/2022, 13:13
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

import { AllModals } from '../redux/redux-dom-manipulate/types';
import useModalChangeVisibility from '../hooks/modals/useModalChangeVisibility';

import {
    LogoutWarningModalContainer, LogoutWarningModalWrapper
} from '../components/logout-warning-modal/LogoutWarningModal.styles';


interface PropsProvider {
    selectedModal: AllModals;
    children: React.ReactNode;
}

/**
 * High order component creating basic stuff (container and wrapper with generating animation sequence hook)
 * of all single page modal structure.
 *
 * @param selectedModal { AllModals } - type of selected modal.
 * @param children { React.ReactNode } - wrapped React component childrens of root element.
 */
const ModalStructureHOC: React.FC<PropsProvider> = ({ selectedModal, children }): JSX.Element => {

    const [ backgroundRef, contentRef ] = useModalChangeVisibility(selectedModal);

    return (
        <LogoutWarningModalContainer
            ref = {backgroundRef}
        >
            <LogoutWarningModalWrapper
                ref = {contentRef}
            >
                {children}
            </LogoutWarningModalWrapper>
        </LogoutWarningModalContainer>
    );
};

export default ModalStructureHOC;