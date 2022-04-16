/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: initialObjects.ts
 * Last modified: 16/04/2022, 14:38
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

import { ProjectFormModel } from '../../redux-models/ProjectFormModel';
import { ProjectFormErrorsModel } from '../../redux-models/ProjectFormErrorsModel';


export const ProjectFormInitialState: ProjectFormModel = {
    title: '',
    embedCode: '',
    prodCompany: '',
    prodYear: '',
    aboutSection: [ '' ],
    prodSection: [ '' ],
    fontFamily: '',
    fontType: '',
    fontSize: '',
    lineHeight: '',
    renderingTime: '',
    samplingCodec: '',
    nativeResolution: '',
    shortResolution: '',
    ifImax: false,
    projectColours: {
        mainBackground: '#2c5662',
        dotAndParagraphInProduction: '#648e99',
        dotOnLightBackground: '#2c5662',
        techBackground: '#1b363d',
    },
    usedSoftware: [
        {
            softwareFor: 'titles',
            software: {
                softwareFullName: 'Adobe&reg; After Effects',
                softwareShortName: 'ae',
            },
        },
    ],
};

export const ProjectFormErrorsInitialState: ProjectFormErrorsModel = {
    title: false,
    embedCode: false,
    prodCompany: false,
    prodYear: false,
    aboutSection: [ false ],
    prodSection: [ false ],
    fontFamily: false,
    fontType: false,
    fontSize: false,
    lineHeight: false,
    renderingTime: false,
    samplingCodec: false,
    nativeResolution: false,
    shortResolution: false,
    usedSoftware: [ false ],
};