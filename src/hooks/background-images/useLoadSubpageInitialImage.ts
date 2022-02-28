/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useLoadSubpageInitialImage.ts
 * Last modified: 28/02/2022, 17:41
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

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ReduxDOMActions } from '../../redux/redux-dom-manipulate/actions';
import { ReduxDOMstateKeys } from '../../redux/redux-dom-manipulate/types';

/**
 * Custom hook responsible for initial load image on subpages.
 *
 * @param image { string } - image string identifier indicate which image would be load.
 * @param showBackgroundOnLoad { boolean } - flag indicate, if image will load initialy after build DOM structure.
 */
const useLoadSubpageInitialImage = (image: string, showBackgroundOnLoad: boolean): null => {

    const dispatcher = useDispatch();

    useEffect(() => {
        if (showBackgroundOnLoad) {
            setTimeout(() => {
                dispatcher(ReduxDOMActions.changeFirstLevelElement(ReduxDOMstateKeys.ON_HOVER_ACTIVE_IMAGE_ID, image));
            }, 1100);
        }
    }, [ dispatcher, image, showBackgroundOnLoad ]);

    return null;
};

export default useLoadSubpageInitialImage;