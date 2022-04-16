/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ProjectModel.ts
 * Last modified: 16/04/2022, 15:05
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

export interface ProjectModel {
    id: string;
    title: string;
    projectPath: string;
    embedCode: string;
    prodYear: number;
    prodCompany: string;
    createdTimestamp: number;
    aboutSection: {
        paragraphOrder: number;
        paragraph: string;
    }[];
    prodSection: {
        paragraphOrder: number;
        paragraph: string;
    }[];
    typography: {
        fontFamily: string;
        fontType: string;
        fontSize: string;
        lineHeight: string;
    };
    renderProps: {
        renderingTime: string;
        samplingCodec: string;
        nativeResolution: string;
        shortResolution: string;
        ifImax: boolean;
        aspectRatio: number;
    };
    projectColours: {
        mainBackground: string;
        mainHeader: string;
        tintHeader: string;
        paragrForeground: string;
        techBackground: string;
        strongForeground: string;
        compositeColours: {
            compositeColour: string;
        }[];
    };
    usedSoftware: SoftwareModel[];
}

export interface SoftwareModel {
    softwareFor: string;
    software: {
        softwareFullName: string;
        softwareShortName: string;
    };
}