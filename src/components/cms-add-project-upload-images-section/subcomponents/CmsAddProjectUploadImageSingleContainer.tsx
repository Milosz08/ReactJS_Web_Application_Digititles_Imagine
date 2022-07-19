/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectUploadImageSingleContainer.tsx
 * Last modified: 19/07/2022, 17:02
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
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';

import HeaderElement from '../../universal-components/HeaderElement';
import { ImageUploadContainerTypes } from '../../../static/imageUploadContainers';

import {
    CmsAddProjectUploadImageSectionOpenModalButton,
    CmsAddProjectUploadImageSingleContainerDescription, CmsAddProjectUploadImageSingleContainerWrapper
} from '../CmsAddProjectUploadImagesSection.styles';


interface PropsProvider {
    imageContainerInfo: ImageUploadContainerTypes;
}

const CmsAddProjectUploadImageSingleContainer: React.FC<PropsProvider> = ({ imageContainerInfo }): JSX.Element => {

    const { imageUploadProperties }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { modalsState }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);

    const imageAlreadyUploaded = imageUploadProperties[imageContainerInfo.imageUploadMode].imagesUriShortcutArray.length;
    const dispatcher = useDispatch();

    const handleToggleOpenUploadedImagesModal = (): void => {
        dispatcher(ReduxAPIActions.setMessageOnUploadImage(imageContainerInfo.imageUploadMode, '', false));
        dispatcher(ReduxDOMActions.toggleUploadImageModalState(
            !modalsState[imageContainerInfo.imageUploadMode], imageContainerInfo.imageUploadMode)
        );
    };

    return (
        <CmsAddProjectUploadImageSingleContainerWrapper>
            <HeaderElement
                fontSize = '1.5rem'
                ifRemoveMargin = {true}
            >
                {imageContainerInfo.header}
            </HeaderElement>
            <CmsAddProjectUploadImageSingleContainerDescription>
                {imageContainerInfo.description}
            </CmsAddProjectUploadImageSingleContainerDescription>
            <CmsAddProjectUploadImageSectionOpenModalButton
                type = 'button'
                onClick = {handleToggleOpenUploadedImagesModal}
            >
                Click to upload image ({imageAlreadyUploaded}/{imageContainerInfo.maxImageUpload} uploaded)
            </CmsAddProjectUploadImageSectionOpenModalButton>
        </CmsAddProjectUploadImageSingleContainerWrapper>
    );
};

export default CmsAddProjectUploadImageSingleContainer;