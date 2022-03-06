/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GenerateUndrawImages.tsx
 * Last modified: 28/02/2022, 16:37
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

import { ImagesAnimationContext, ImagesAnimationTypes } from '../BackgroundFluidImage';
import useOnHoverSelectImages from '../../../hooks/background-images/useOnHoverSelectImages';
import useShowHideBackgroundImage from '../../../hooks/background-images/useShowHideBackgroundImage';

import { BackgroundFluidBasicImageContainer, BackgroundFluidBasicImageStyles } from '../BackgroundFluidImage.styles';


const GenerateUndrawImages: React.FC = (): JSX.Element => {

    const { images, showBackgroundOnLoad } = useContext<Partial<ImagesAnimationTypes>>(ImagesAnimationContext);

    const [ imageRef ] = useShowHideBackgroundImage({ invokePx: 200, ifShowOnLoad: showBackgroundOnLoad, elements: 1 });
    const imageRefs = useOnHoverSelectImages({
        countOfImages: images!.length, ifAutoAlpha: true, invoke: { hidePx: -70, showPx: -100 }
    });

    const generateUndrawImages: JSX.Element[] = images!.map((image, idx) => (
        <BackgroundFluidBasicImageStyles
            key = {image}
            ref = {imageRefs[idx]}
            src = {`${process.env.PUBLIC_URL}/asset-images/undraw-images/undraw_${image}.svg`}
            alt = {`Unable to load image: ${image}`}
        />
    ));

    return (
        <BackgroundFluidBasicImageContainer
            ref = {imageRef}
        >
            {generateUndrawImages}
        </BackgroundFluidBasicImageContainer>
    );
};

export default GenerateUndrawImages;