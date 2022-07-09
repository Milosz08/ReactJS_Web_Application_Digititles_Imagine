/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: reducer.ts
 * Last modified: 16/04/2022, 14:35
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

import Utils from '../../utils';
import { ProjectFormEditableMode, ReduxProjFormReducerTypes } from './types';

import { InitStateAPI, InitStateAPItypes } from '../../redux-api-thunk/initialState';


const reduxReducerProjForm = (state = InitStateAPI, action: any): InitStateAPItypes => {
    switch (Utils.normalised(action.type)) {

        case ReduxProjFormReducerTypes.INSERT_PROJECT_FORM_ELEMENT: {
            const { elementKey, value, mode } = action.payload;
            const currentMode = mode === ProjectFormEditableMode.NORMAL ? 'projectDataForm' : 'projectDataFormErrors';
            return { ...state,
                [currentMode]: { ...state.projectDataForm,
                    [elementKey]: value,
                },
            };
        }

        case ReduxProjFormReducerTypes.INSERT_EXISTING_PROJECT_DATA_TO_FORM: {
            const { projectId } = action.payload;
            const findExistingProject = state.projects.find(project => project.id === projectId);
            if (!findExistingProject) return state;

            const {
                title, embedCode, prodCompany, prodYear, aboutSection, prodSection, typography, renderProps,
                projectColours, usedSoftware,
            } = findExistingProject;

            const { fontSize, fontFamily, lineHeight, fontType } = typography;
            const { renderingTime, nativeResolution, samplingCodec, ifImax, shortResolution } = renderProps;
            const { mainBackground, mainHeader, strongForeground, techBackground } = projectColours;

            const aboutParagraphs = aboutSection.map(el => el.paragraph);
            const prodParagraphs = prodSection.map(el => el.paragraph);

            return { ...state,
                projectDataForm: {
                    title, embedCode, prodCompany, prodYear, aboutSection: aboutParagraphs, prodSection: prodParagraphs,
                    fontSize, fontFamily, lineHeight, fontType, renderingTime, nativeResolution, samplingCodec, ifImax,
                    shortResolution,
                    projectColours: {
                        mainBackground, dotAndParagraphInProduction: mainHeader, dotOnLightBackground: strongForeground,
                        techBackground,
                    },
                    usedSoftware: JSON.parse(JSON.stringify(usedSoftware)),
                },
                projectDataFormErrors: { ...state.projectDataFormErrors,
                    prodSection: Array.from({ length: prodSection.length }, () => false),
                    aboutSection: Array.from({ length: aboutSection.length }, () => false),
                },
                projectFormIfActiveCustomProp: Array.from({ length: usedSoftware.length }, () => false),
            };
        }

        case ReduxProjFormReducerTypes.CLEAR_ALL_PROJECT_FORM_ELEMENTS: {
            return { ...state,
                projectDataForm: {
                    title: '', prodYear: '', prodCompany: '', embedCode: '', prodSection: [ '' ], aboutSection: [ '' ],
                    fontSize: '', fontFamily: '', fontType: '', lineHeight: '', renderingTime: '', nativeResolution: '',
                    samplingCodec: '', shortResolution: '', ifImax: false,
                    projectColours: {
                        mainBackground: '#2c5662', dotAndParagraphInProduction: '#648e99',
                        dotOnLightBackground: '#2c5662', techBackground: '#1b363d',
                    },
                    usedSoftware: [
                        {
                            softwareFor: 'titles', software: {
                                softwareFullName: 'Adobe&reg; After Effects', softwareShortName: 'ae'
                            }
                        }
                    ],
                },
                projectDataFormErrors: {
                    title: false, embedCode: false, prodCompany: false, prodYear: false, prodSection: [ false ],
                    aboutSection: [ false ], fontSize: false, fontFamily: false, fontType: false, lineHeight: false,
                    renderingTime: false, nativeResolution: false, samplingCodec: false, shortResolution: false,
                    usedSoftware: [ false ],
                },
                projectFormIfActiveCustomProp: [ false ],
            };
        }

        case ReduxProjFormReducerTypes.CHANGE_PROJECT_ARRAY_CONTENT_VALUE: {
            const { arrayType, index, value } = action.payload;
            const newState = state.projectDataForm[arrayType];
            newState[index] = value;
            return { ...state,
                projectDataForm: { ...state.projectDataForm,
                    [arrayType]: newState,
                },
            };
        }

        case ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_SINGLE_COLOR_VALUE: {
            const { colorValueKey, value } = action.payload;
            return { ...state,
                projectDataForm: { ...state.projectDataForm,
                    projectColours: { ...state.projectDataForm.projectColours,
                        [colorValueKey]: value,
                    },
                },
            };
        }

        case ReduxProjFormReducerTypes.ADD_PROJECT_ARRAY_ELEMENT: {
            const { arrayType, insertValue } = action.payload;
            return { ...state,
                projectDataForm: { ...state.projectDataForm,
                    [arrayType]: [ ...state.projectDataForm[arrayType], insertValue ],
                },
                projectDataFormErrors: { ...state.projectDataFormErrors,
                    [arrayType]: [ ...state.projectDataFormErrors[arrayType], false ],
                },
                projectFormIfActiveCustomProp: [ ...state.projectFormIfActiveCustomProp, false ],
            };
        }

        case ReduxProjFormReducerTypes.REMOVE_PROJECT_ARRAY_ELEMENT: {
            const { arrayType, index } = action.payload;
            const arrayWithoutElement = state.projectDataForm[arrayType].filter((_: any, idx: number) => idx !== index);
            return { ...state,
                projectDataForm: { ...state.projectDataForm,
                    [arrayType]: arrayWithoutElement,
                },
                projectDataFormErrors: { ...state.projectDataFormErrors,
                    [arrayType]: Utils.removeLastElementFromArray(state.projectDataFormErrors[arrayType], index),
                },
                projectFormIfActiveCustomProp: Utils.removeLastElementFromArray(state.projectFormIfActiveCustomProp, index),
            };
        }

        case ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_SOFT_USED_FOR: {
            const { index, value } = action.payload;
            const newUsedSoftwareFor = [ ...state.projectDataForm.usedSoftware ];
            newUsedSoftwareFor[index].softwareFor = value;
            return { ...state,
                projectDataForm: { ...state.projectDataForm,
                    usedSoftware: newUsedSoftwareFor
                },
            };
        }

        case ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_SOFT_NAME: {
            const { index, value, short } = action.payload;
            const newSoftwareName = [ ...state.projectDataForm.usedSoftware ];
            newSoftwareName[index].software.softwareFullName = value;
            newSoftwareName[index].software.softwareShortName = short;
            return { ...state,
                projectDataForm: { ...state.projectDataForm,
                    usedSoftware: newSoftwareName
                },
            };
        }

        case ReduxProjFormReducerTypes.CHANGE_PROJECT_FORM_IF_ACTIVE_CUSTOM_SOFT: {
            const { index, value } = action.payload;
            const newState = state.projectFormIfActiveCustomProp;
            newState[index] = value;
            return { ...state,
                projectFormIfActiveCustomProp: newState,
            };
        }

        case ReduxProjFormReducerTypes.SETTING_SERVER_RESPONSE: {
            const { message, ifError } = action.payload;
            return { ...state,
                addEditServerResponseMessage: message,
                ifServerResponseMessageError: ifError,
            };
        }

        default: {
            return state;
        }
    }
}

export default reduxReducerProjForm;