/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: Mapping.ts
 * Last modified: 09/07/2022, 01:48
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

import { ProjectFormModel } from '../redux/redux-models/ProjectFormModel';


export class Mapping {

    public static projectStoreToSenderPayload(projectId: string, projectDataForm: ProjectFormModel): object {
        const allProjectColours = Object.keys(projectDataForm.projectColours)
            .map(key => ({ compositeColour: projectDataForm.projectColours[key].toLowerCase() }));
        return {
            id: projectId,
            title: projectDataForm.title,
            embedCode: projectDataForm.embedCode,
            prodYear: projectDataForm.prodYear,
            prodCompany: projectDataForm.prodCompany,
            aboutSection: projectDataForm.aboutSection.map((el, idx) => ({ paragraphOrder: idx, paragraph: el })),
            prodSection: projectDataForm.prodSection.map((el, idx) => ({ paragraphOrder: idx, paragraph: el })),
            typography: {
                fontFamily: projectDataForm.fontFamily,
                fontType: projectDataForm.fontType,
                fontSize: projectDataForm.fontSize,
                lineHeight: projectDataForm.lineHeight,
            },
            renderProps: {
                renderingTime: projectDataForm.renderingTime,
                samplingCodec: projectDataForm.samplingCodec,
                nativeResolution: projectDataForm.nativeResolution,
                shortResolution: projectDataForm.shortResolution,
                ifImax: projectDataForm.ifImax,
            },
            projectColours: {
                mainBackground: projectDataForm.projectColours.mainBackground,
                mainHeader: projectDataForm.projectColours.dotAndParagraphInProduction,
                tintHeader: projectDataForm.projectColours.dotAndParagraphInProduction,
                paragrForeground: projectDataForm.projectColours.dotAndParagraphInProduction,
                techBackground: projectDataForm.projectColours.techBackground,
                strongForeground: projectDataForm.projectColours.dotOnLightBackground,
                compositeColours: [ ...new Set(allProjectColours) ],
            },
            usedSoftware: projectDataForm.usedSoftware,
        };
    };

}