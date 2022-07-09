/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: types.ts
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

export enum ReduxProjFormReducerTypes {
    INSERT_PROJECT_FORM_ELEMENT = 'INSERT_PROJECT_FORM_ELEMENT__[PROJECT FORM REDUCER]',
    INSERT_EXISTING_PROJECT_DATA_TO_FORM = 'INSERT_EXISTING_PROJECT_DATA_TO_FORM__[PROJECT FORM REDUCER]',
    CLEAR_ALL_PROJECT_FORM_ELEMENTS = 'CLEAR_ALL_PROJECT_FORM_ELEMENTS__[PROJECT FORM REDUCER]',
    CHANGE_PROJECT_ARRAY_CONTENT_VALUE = 'CHANGE_PROJECT_ARRAY_CONTENT_VALUE__[PROJECT FORM REDUCER]',
    CHANGE_PROJECT_FORM_SINGLE_COLOR_VALUE = 'CHANGE_PROJECT_FORM_SINGLE_COLOR_VALUE__[PROJECT FORM REDUCER]',
    ADD_PROJECT_ARRAY_ELEMENT = 'ADD_PROJECT_ARRAY_PARAGRAPH_ELEMENT__[PROJECT FORM REDUCER]',
    REMOVE_PROJECT_ARRAY_ELEMENT = 'REMOVE_PROJECT_ARRAY_PARAGRAPH_ELEMENT__[PROJECT FORM REDUCER]',
    CHANGE_PROJECT_FORM_SOFT_USED_FOR = 'CHANGE_PROJECT_FORM_SOFT_USED_FOR__[PROJECT FORM REDUCER]',
    CHANGE_PROJECT_FORM_SOFT_NAME = 'CHANGE_PROJECT_FORM_SOFT_NAME__[PROJECT FORM REDUCER]',
    CHANGE_PROJECT_FORM_IF_ACTIVE_CUSTOM_SOFT = 'CHANGE_PROJECT_FORM_IF_ACTIVE_CUSTOM_SOFT__[PROJECT FORM REDUCER]',
    SETTING_SERVER_RESPONSE = 'SETTING_SERVER_RESPONSE__[FORMS REDUCER]',
}

export enum ProjectFieldsKeys {
    TITLE = 'title',
    EMBED_CODE = 'embedCode',
    PROD_COMPANY = 'prodCompany',
    PROD_YEAR = 'prodYear',
    FONT_FAMILY = 'fontFamily',
    FONT_TYPE = 'fontType',
    FONT_SIZE = 'fontSize',
    LINE_HEIGHT = 'lineHeight',
    RENDERING_TIME = 'renderingTime',
    SAMPLING_CODEC = 'samplingCodec',
    NATIVE_RESOLUTION = 'nativeResolution',
    SHORT_RESOLUTION = 'shortResolution',
    IF_IMAX = 'ifImax',
}

export enum ProjectFormEditableMode {
    NORMAL = 'NORMAL',
    ERROR = 'ERROR',
}

export enum DiscretteProjectSections {
    ABOUT_SECTION = 'aboutSection',
    PROD_SECTION = 'prodSection',
    SPEC_SECTION = 'usedSoftware',
}