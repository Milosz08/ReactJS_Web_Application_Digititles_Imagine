/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectUploadImageModal.tsx
 * Last modified: 19/07/2022, 18:08
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
import { useDispatch } from 'react-redux';

import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { ImageUploadContainers, ImageUploadMode } from '../../../static/imageUploadContainers';

import { ModalButtonElement } from '../../../styles/modals.styles';
import { CmsAddProjectModalButtonsContainer, CmsAddProjectModalContainer } from '../CmsAddProjectUploadImagesSection.styles';

import HeaderElement from '../../universal-components/HeaderElement';
import CmsAddProjectUploadInputFrame from './CmsAddProjectUploadInputFrame';
import ModalStructureHOC from '../../../high-order-components/ModalStructureHOC';


interface PropsProvider {
    imageModalType: ImageUploadMode;
}

const CmsAddProjectUploadImageModal: React.FC<PropsProvider> = ({ imageModalType }): JSX.Element => {

    const uploadBlock = ImageUploadContainers.find(container => container.imageUploadMode === imageModalType)!;
    const modalType = imageModalType as string;
    const dispatcher = useDispatch();

    const handleCloseUploadImageModal = (): void => {
        dispatcher(ReduxDOMActions.toggleUploadImageModalState(false, imageModalType));
    };

    return (
        <ModalStructureHOC
            selectedModal = {modalType}
        >
            <CmsAddProjectModalContainer>
                <HeaderElement
                    fontSize = '1.7rem'
                >
                    {uploadBlock && uploadBlock.header}
                </HeaderElement>
                <CmsAddProjectUploadInputFrame
                    uploadBlock = {uploadBlock}
                    imageModalType = {imageModalType}
                />
                <CmsAddProjectModalButtonsContainer>
                    <ModalButtonElement
                        title = 'Click to close upload image content modal.'
                        onClick = {handleCloseUploadImageModal}
                    >
                        Close modal
                    </ModalButtonElement>
                </CmsAddProjectModalButtonsContainer>
            </CmsAddProjectModalContainer>
        </ModalStructureHOC>
    );
};

export default CmsAddProjectUploadImageModal;