/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: useGenerateSoftwareNameSelectBoxes.ts
 * Last modified: 16/04/2022, 04:13
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
 * Custom hook responsible for finding all software name objets and remove duplicates.
 */
const useGenerateSoftwareNameSelectBoxes = (): { softwareFullName: string, softwareShortName: string }[] => {

    const { projects }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const findAllSoftwares = projects.map(project => project.usedSoftware.map(soft => soft.software));

    const mergedArraySoft: any[] = [];
    findAllSoftwares.map(array => mergedArraySoft.push(...array));

    return [ ...new Map(mergedArraySoft.map(v => (
        [ JSON.stringify([ v.softwareFullName, v.softwareShortName ]), v ]
    ))).values() ];
};

export default useGenerateSoftwareNameSelectBoxes;