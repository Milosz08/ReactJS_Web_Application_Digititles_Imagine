/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: imageUploadContainers.ts
 * Last modified: 19/07/2022, 17:09
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

export interface ImageUploadContainerTypes {
    header: string;
    description: string;
    maxImageUpload: number;
    imageUploadMode: ImageUploadMode;
    prefImageRes: string;
}

export enum ImageUploadMode {
    MAIN_IMAGE = 'ifMainImageUploadModeOpen',
    ASSEMBLY_IMAGE = 'ifAssemblyImageUploadModeOpen',
    BACKGROUND_IMAGE = 'ifBackgroundImageUploadModeOpen',
}

export const ImageUploadContainers: ImageUploadContainerTypes[] = [
    {
        header: 'Main image',
        description: 'Photo shown on front page with all projects.',
        maxImageUpload: 1,
        imageUploadMode: ImageUploadMode.MAIN_IMAGE,
        prefImageRes: '960x1080',
    },
    {
        header: 'Assembly images',
        description: 'Images shown in the slider in the section describing the design process.',
        maxImageUpload: 2,
        imageUploadMode: ImageUploadMode.ASSEMBLY_IMAGE,
        prefImageRes: '1920x1080',
    },
    {
        header: 'Background credits image',
        description: 'Photo visible between the technical specifications sections and the design development process. ' +
            'It has a parallax effect applied.',
        maxImageUpload: 1,
        imageUploadMode: ImageUploadMode.BACKGROUND_IMAGE,
        prefImageRes: '1920x1620',
    },
];

export const MAX_IMAGE_SIZE_IN_MB: number = 5;