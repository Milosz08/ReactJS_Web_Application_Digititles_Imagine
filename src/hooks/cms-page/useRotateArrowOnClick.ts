/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useRotateArrowOnClick.ts
 * Last modified: 16/04/2022, 14:54
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

import React, { useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { gsap } from 'gsap';

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

import {
    SoftwareContext, SoftwareContextTypes
} from '../../components/cms-add-project-colors-and-software-section/subcomponents/CmsAddProjectSoftwareSection';


/**
 * Custom hook responsible for rotate arrow icon on every click on 180 degress.
 *
 * @return { React.MutableRefObject<any> } - referential object.
 */
const useRotateArrowOnClick = (): React.MutableRefObject<any> => {

    const { projectFormIfActiveCustomProp }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);
    const { iteration } = useContext<Partial<SoftwareContextTypes>>(SoftwareContext);

    const ifCustomBoxEnabled = projectFormIfActiveCustomProp[iteration!];
    const elRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const childrenElm = elRef.current!.children[0] as HTMLElement;
        gsap.to(childrenElm, { rotate: childrenElm.style.rotate === '180deg' ? 0 : 180 });
    }, [ ifCustomBoxEnabled ]);

    return elRef;
};

export default useRotateArrowOnClick;