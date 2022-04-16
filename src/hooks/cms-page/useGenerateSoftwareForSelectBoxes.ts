/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useGenerateSoftwareForSelectBoxes.ts
 * Last modified: 16/04/2022, 03:54
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

import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { InitStateAPItypes } from '../../redux/redux-api-thunk/initialState';

/**
 * Custom hook responsible for finding all software "used for" objets and remove duplicates.
 */
const useGenerateSoftwareForSelectBoxes = (): string[] => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const findAllSoftwareFor = projects.map(project => project.usedSoftware.map(soft => soft.softwareFor));

    const mergedArray: any[] = [];
    findAllSoftwareFor.map(array => mergedArray.push(...array));

    return [ ...new Set(mergedArray) ];
};

export default useGenerateSoftwareForSelectBoxes;