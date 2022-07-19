/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectUploadShowAllUploadedImages.tsx
 * Last modified: 19/07/2022, 21:53
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
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { ImageUploadMode } from '../../../static/imageUploadContainers';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';

import {
    CmsAddProjectUploadImageFileContainer, CmsAddProjectUploadImageFileImagesContainer, CmsAddProjectUploadImageFileSource,
    CmsAddProjectUploadImageFileSourceDeleteImageButton
} from '../CmsAddProjectUploadImagesSection.styles';


interface PropsProvider {
    imageModalType: ImageUploadMode;
}

const CmsAddProjectUploadShowAllUploadedImages: React.FC<PropsProvider> = ({ imageModalType }): JSX.Element => {

    const { imageUploadProperties }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const selectImagesUriArray = imageUploadProperties[imageModalType].imagesUriShortcutArray;

    const dispatcher = useDispatch();

    const handleRemoveImageFromTemporaryStorage = (uriAddress: string): void => {
        dispatcher(ReduxAPIActions.removeImageUriToSelectImageModeArray(imageModalType, uriAddress));
    };

    const generateAllImagesUriComponents: JSX.Element[] = selectImagesUriArray.map((uriAddress: string) => (
        <CmsAddProjectUploadImageFileContainer
            key = {uriAddress}
        >
            <CmsAddProjectUploadImageFileSource
                alt = {`Uploaded image in ${imageModalType} section.`}
                src = {uriAddress}
            />
            <CmsAddProjectUploadImageFileSourceDeleteImageButton
                title = 'Click to remove the image from temporary storage.'
                onClick = {handleRemoveImageFromTemporaryStorage.bind(null, uriAddress)}
            >
              <FaTimes/>
            </CmsAddProjectUploadImageFileSourceDeleteImageButton>
        </CmsAddProjectUploadImageFileContainer>
    ));

    return (
        <CmsAddProjectUploadImageFileImagesContainer>
            {generateAllImagesUriComponents}
        </CmsAddProjectUploadImageFileImagesContainer>
    );
};

export default CmsAddProjectUploadShowAllUploadedImages;