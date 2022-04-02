/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsDeleteContentModal.tsx
 * Last modified: 02/04/2022, 22:19
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
import { useSelector } from 'react-redux';

import { AllModals, DeleteModalPlaceholders } from '../../redux/redux-dom-manipulate/types';

import ModalStructureHOC from '../../high-order-components/ModalStructureHOC';
import CmsDeleteContentModalButtons from './subcomponents/CmsDeleteContentModalButtons';
import { InitStateDOMtypes } from '../../redux/redux-dom-manipulate/initialState';
import { RootState } from '../../redux/store';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ModalHeader, ModalParagraph, ModalWarningIconContainer } from '../../styles/modals.styles';


const CmsDeleteContentModal: React.FC = (): JSX.Element => {

    const { deleteModalData }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    return (
        <ModalStructureHOC
            selectedModal = {AllModals.DELETE_CONTENT}
        >
            <ModalWarningIconContainer>
                <AiOutlineInfoCircle/>
            </ModalWarningIconContainer>
            <ModalHeader>
                Attempt to remove <strong>{DeleteModalPlaceholders[deleteModalData.dataContent!]}</strong>
            </ModalHeader>
            <ModalParagraph>
                Are you sure you want to delete {DeleteModalPlaceholders[deleteModalData.dataContent!]} with
                database ID: {deleteModalData.dataId}? Actions cannot be undone!
            </ModalParagraph>
            <CmsDeleteContentModalButtons/>
        </ModalStructureHOC>
    );
};

export default CmsDeleteContentModal;