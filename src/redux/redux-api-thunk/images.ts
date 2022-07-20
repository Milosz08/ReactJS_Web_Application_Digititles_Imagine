/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: images.ts
 * Last modified: 20/07/2022, 21:38
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

import { ImageUploadMode } from '../../static/imageUploadContainers';
import { axiosInstance, JavaApiEndpoints } from './request';

export class ImagesManipulator {

    public static async convertAndUploadProjectImage(
        projectId: string, projectTitle: string, imagesStoreProperties: any, { Authorization }: any
    ) {
        const formData = new FormData();
        let allElements = 0;
        let fullElements = this.calculateAllImagesInArrays(imagesStoreProperties);
        for (const key of Object.keys(imagesStoreProperties)) {
            const uriImages = imagesStoreProperties[key].imagesUriShortcutArray;
            let iterator = 0;
            for(const image of uriImages) {
                const response = await fetch(image);
                const imageBlob = await response.blob();
                const reader = new FileReader();
                reader.onload = () => {
                    const blobAsDataUrl = reader.result;
                    let filename = projectTitle + imagesStoreProperties[key].defaultFileName;
                    if (key === ImageUploadMode.ASSEMBLY_IMAGE) {
                        filename += ++iterator;
                    }
                    this.dataUrlToFile(blobAsDataUrl as string, filename + '.png').then(res => {
                        formData.append("files", res);
                        allElements++;
                        if (allElements === fullElements) {
                            axiosInstance.post(`${JavaApiEndpoints.PHOTOS}/upload/${projectId}`, formData, { headers: {
                                "Content-Type": "multipart/related", Authorization,
                            }});
                        }
                    });
                };
                reader.readAsDataURL(imageBlob);
            }
        }
    };

    private static calculateAllImagesInArrays(imagesStoreProperties: any): number {
        let fullElements = 0;
        for(const key of Object.keys(imagesStoreProperties)) {
            fullElements += imagesStoreProperties[key].imagesUriShortcutArray.length;
        }
        return fullElements;
    };

    private static async dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
        const res: Response = await fetch(dataUrl);
        const blob: Blob = await res.blob();
        return new File([blob], fileName, { type: 'image/png' });
    }

}