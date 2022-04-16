/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectFormModel.ts
 * Last modified: 16/04/2022, 15:04
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

export interface ProjectFormModel {
    title: string;
    embedCode: string;
    prodCompany: string;
    prodYear: number | string;
    aboutSection: string[];
    prodSection: string[];
    fontFamily: string;
    fontType: string;
    fontSize: string;
    lineHeight: string;
    renderingTime: string;
    samplingCodec: string;
    nativeResolution: string;
    shortResolution: string;
    ifImax: boolean;
    projectColours: {
        mainBackground: string;
        dotAndParagraphInProduction: string;
        dotOnLightBackground: string;
        techBackground: string;
    };
    usedSoftware: {
        softwareFor: string;
        software: {
            softwareFullName: string;
            softwareShortName: string;
        };
    }[];
}