/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: servicesTextBlocks.ts
 * Last modified: 12/03/2022, 11:29
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

import { ServicesSections } from '../redux/redux-dom-manipulate/types';

export interface BlockInfoTypes {
    title: string;
    shortName: string;
    link?: string;
}

export interface ServicesInitialBlocksTypes {
    initialBlocks: {
        header: string;
        paragraphs: string[];
        activeSection: ServicesSections;
    }[];
    softwareBlocks: {
        textContent: {
            header: string;
            paragraphs: string[];
        };
        infoBlocksContent: BlockInfoTypes[];
    };
    qualityBlocks: {
        textContent: {
            header: string;
            list: {
                header: string;
                description: string;
            }[];
        };
        infoBlocksContent: BlockInfoTypes[];
    };
}

export const ServicesTextBlocks: ServicesInitialBlocksTypes = {
    initialBlocks: [
        {
            header: 'main credits',
            paragraphs: [
                'Main credits, which in a sense create the first contact of the film with the viewer. It sometimes ' +
                'depends on them whether the viewer stays with the movie or decides to turn it off.',
                'It is to them that we pay the greatest attention to the stage of creation. We try to create ' +
                'something creative - something that will be a unique start to the film and will introduce the ' +
                'viewer to the atmosphere of the film.',
            ],
            activeSection: ServicesSections.MAIN_CREDITS,
        },
        {
            header: 'end credits',
            paragraphs: [
                'Last but not limited to the final credits that topped the film. They are an excellent summary and ' +
                'tribute to all those working on the film - from screenwriters to people responsible for catering.',
                'When creating end credits, we try to use modern and clean fonts, tailored to the theme of the film. ' +
                'The end credits we create pass a series of checks to avoid linguistic mistake.',
            ],
            activeSection: ServicesSections.END_CREDITS,
        },
        {
            header: 'subtitles',
            paragraphs: [
                'Translating dialogue issues in languages other than the original, and placing them in a video ' +
                'or providing them in the form of alpha channel files.',
                'We will translate subtitles from Polish into English and from English into Polish. In order to create ' +
                'subtitles in languages other than those mentioned, please fine-tune subtitles that have already been translated.',
            ],
            activeSection: ServicesSections.SUBTITLES,
        },
    ],
    softwareBlocks: {
        textContent: {
            header: 'software',
            paragraphs: [
                'Most of the main credits are made entirely using **Adobe&reg; After Effects** and various plugins, mainly ' +
                '**Video Copilot** and **NewBlueFX**. Sometimes credits have generated 3D graphics (2001: A Space Odyssey, ' +
                'Piranha 3D, The Queen\'s Gambit). Then we use **Cinema 4D** software.',
                'We make all end credits in Titler Pro 7, a professional system specifically designed to generate ' +
                'and render end credits. This is one of the better tools in the industry, used by leading box office hit makers.',
                'In each project, you\'ll see icons that tell you what programs we used to create a credits sequence.',
                'To create a sequences of credits, we use a workstations equipped with **AMD&reg;** processors and ' +
                'specialized for rendering high-resolution 3D objects.',
            ],
        },
        infoBlocksContent: [
            {
                title: 'Adobe&reg Photoshop',
                shortName: 'Ps',
                link: 'https://www.adobe.com/products/photoshop.html',
            },
            {
                title: 'Adobe&reg After Effects',
                shortName: 'Ae',
                link: 'https://www.adobe.com/products/aftereffects.html',
            },
            {
                title: 'Adobe&reg Premiere Pro',
                shortName: 'Pr',
                link: 'https://www.adobe.com/products/premiere.html',
            },
            {
                title: 'Adobe&reg Media Encoder',
                shortName: 'Me',
                link: 'https://www.adobe.com/products/media-encoder.html',
            },
            {
                title: 'Titler Pro 7',
                shortName: 'T7',
                link: 'https://newbluefx.com/products/titling/titler-pro/',
            },
            {
                title: 'Cinema 4D by Maxon',
                shortName: '4D',
                link: 'https://www.maxon.net/en/cinema-4d',
            },
        ],
    },
    qualityBlocks: {
        textContent: {
            header: 'quality',
            list: [
                {
                    header: 'SD (Standard Definition)',
                    description: 'all custom resolutions up to 1080p (not including 1080p)',
                },
                {
                    header: 'HD (High Definition)',
                    description: 'the most popular resolution of amateur videos, most commonly found on YouTube. ' +
                        'The base resolution is 1920x1080, which may vary depending on the aspect ratio of the project ' +
                        '(for example, for a 2.39:1 cinematic aspect ratio, the resolution is 1920x816 lines)',
                },
                {
                    header: '2K (DCI Cinema)',
                    description: 'the most popular cinema resolution, which according to DCI standards is ' +
                        'respectively: for a ratio of 1.85:1 respectively 1998x1080, for a ratio of 2.39:1 respectively ' +
                        '2048x858 and for the IMAX aspect ratio (1.90:1) respectively 2048x1080',
                },
                {
                    header: '4K (DCI Cinema)',
                    description: 'less popular, but increasingly used cinema resolution, which according to DCI ' +
                        'standards is respectively: for a ratio of 1.85:1 respectively 3996x2160, for a ratio of ' +
                        '2.39:1 respectively 4096x1714 and for the IMAX aspect ratio (1.90:1) respectively 4096x2160. ',
                },
                {
                    header: '8K (Ultra High Definition)',
                    description: 'unpopu popular cinematic resolution, more often found on the Asian market in home appliances. ',
                },
                {
                    header: 'IMAX&reg; (Aspect Ratio)',
                    description: 'credits created with the right proportions for IMAX&reg; and IMAX&reg; Digital&trade; screens. ',
                },
            ],
        },
        infoBlocksContent: [
            {
                title: 'Standard Definition',
                shortName: 'SD',
            },
            {
                title: 'High Definition',
                shortName: 'HD',
            },
            {
                title: 'Cinema Resolution',
                shortName: '2K',
            },
            {
                title: 'Cinema Resolution',
                shortName: '4K',
            },
            {
                title: 'Ultra High Definition',
                shortName: '8K',
            },
            {
                title: 'Aspect Ratio',
                shortName: 'IMAX',
            },
        ]
    },
};