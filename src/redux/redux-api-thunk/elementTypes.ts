/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: elementTypes.ts
 * Last modified: 01/03/2022, 23:59
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

export interface ProjectTypes {
    id: string;
    title: string;
    projectPath: string;
    embedCode: string;
    prodYear: string;
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
    usedSoftware: {
        softwareFor: string;
        software: {
            softwareFullName: string;
            softwareShortName: string;
        };
    }[];
}

export interface ProjectImagesTypes {
    projectId: string;
    projectImages: {
        name: string;
        url: string;
    }[];
}

export interface RegistrationFormTypes {
    id: string;
    username: string;
    lastname: string;
    email: string;
    message: string;
    propertiesData: {
        serviceType: string;
        filmmakerSize: string;
        filmmakerBudget: number;
    }
}

export interface MessagesFormTypes {
    id?: string;
    username: string;
    lastname: string;
    email: string;
    message: string;
}