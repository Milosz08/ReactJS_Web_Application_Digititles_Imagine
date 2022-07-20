/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsAddProjectUploadInputFrame.tsx
 * Last modified: 19/07/2022, 20:54
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
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { ImageUploadContainerTypes, ImageUploadMode, MAX_IMAGE_SIZE_IN_MB } from '../../../static/imageUploadContainers';

import {
    CmsAddProjectUploadImageDescription, CmsAddProjectUploadImageFrameButton, CmsAddProjectUploadImageFrameDescription,
    CmsAddProjectUploadImageInput
} from '../CmsAddProjectUploadImagesSection.styles';

import CmsAddProjectUploadShowAllUploadedImages from './CmsAddProjectUploadShowAllUploadedImages';


interface PropsProvider {
    uploadBlock:  ImageUploadContainerTypes;
    imageModalType: ImageUploadMode;
}

const CmsAddProjectUploadInputFrame: React.FC<PropsProvider> = ({ uploadBlock, imageModalType }): JSX.Element => {

    const { imageUploadProperties }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { ifErrorWhileUploadingImage, onUploadImageMessage, imagesUriShortcutArray } = imageUploadProperties[imageModalType];

    const [ width, height ] = uploadBlock.prefImageRes.split('x');
    const ifDisabled = uploadBlock.maxImageUpload === imagesUriShortcutArray.length;
    const dispatcher = useDispatch();

    const checkImageBeforeUpload = (
        e: ChangeEvent<HTMLInputElement>, file: File, image: HTMLImageElement, allFiles: number
    ): boolean => {
        let ifError = false;
        if (allFiles > uploadBlock!.maxImageUpload) {
            ifError = true;
            dispatcher(ReduxAPIActions.setMessageOnUploadImage(
                imageModalType, `The maximum number of images is ${uploadBlock!.maxImageUpload}.`, true));
        } else if (file.size > MAX_IMAGE_SIZE_IN_MB * 1048576) {
            ifError = true;
            dispatcher(ReduxAPIActions.setMessageOnUploadImage(
                imageModalType, `The image should not exceed  ${MAX_IMAGE_SIZE_IN_MB}MB.`, true));
        } else if (file.type !== 'image/png') {
            ifError = true;
            dispatcher(ReduxAPIActions.setMessageOnUploadImage(
                imageModalType, `The image must have PNG extension.`, true));
        } else if(image.width !== Number(width) || image.height !== Number(height)) {
            ifError = true;
            dispatcher(ReduxAPIActions.setMessageOnUploadImage(
                imageModalType, `The image must have ${uploadBlock.prefImageRes} resolution.`, true));
        }
        return ifError;
    };

    const handleFilesSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatcher(ReduxAPIActions.setMessageOnUploadImage(imageModalType, '', false));
        const files = [ ...e.target.files! ];
        const image = new Image();
        files.forEach(file => {
            const objectUrl = window.URL.createObjectURL(file);
            image.onload = () => {
                if (!checkImageBeforeUpload(e, file, image, files.length)) {
                    dispatcher(ReduxAPIActions.addNewImageUriToSelectImageModeArray(imageModalType, objectUrl));
                }
                e.target.value = '';
            };
            image.src = objectUrl;
        });
    };

    return (
        <>
            <CmsAddProjectUploadImageInput
                type = 'file'
                accept = 'image/png'
                onChange = {handleFilesSelected}
                disabled = {ifDisabled}
            />
            <CmsAddProjectUploadImageFrameButton
                type = 'button'
                disabled = {ifDisabled}
                $ifDisabled = {ifDisabled}
            >
                Click to upload {uploadBlock && uploadBlock.header.toLowerCase()}
                <CmsAddProjectUploadImageFrameDescription>
                    Image res: {uploadBlock && uploadBlock.prefImageRes}, max image size: {MAX_IMAGE_SIZE_IN_MB}MB,
                    max images count: {uploadBlock && uploadBlock.maxImageUpload}, accepted type: PNG
                </CmsAddProjectUploadImageFrameDescription>
            </CmsAddProjectUploadImageFrameButton>
            <CmsAddProjectUploadShowAllUploadedImages
                imageModalType = {imageModalType}
            />
            <CmsAddProjectUploadImageDescription
                $ifError = {ifErrorWhileUploadingImage}
            >
                {onUploadImageMessage}
            </CmsAddProjectUploadImageDescription>
        </>
    );
};

export default CmsAddProjectUploadInputFrame;