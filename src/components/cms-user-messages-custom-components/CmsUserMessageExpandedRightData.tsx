/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsUserMessageExpandedRightData.tsx
 * Last modified: 02/04/2022, 21:26
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

import * as React from 'react';
import { useContext } from 'react';

import { FormContext, FormContextTypes } from '../cms-form-list-components/subcomponents/CmsFormListSingleElement';

import {
    CmsFormExpandedDataContent, CmsFormExpandedDataSection, CmsFormExpandedHeader, CmsFormExpandedHeaderAndDataContainer
} from '../cms-form-list-components/CmsFormListComponent.styles';


const CmsUserMessageExpandedRightData: React.FC = (): JSX.Element => {

    const { form } = useContext<Partial<FormContextTypes>>(FormContext);
    const { message } = form!;

    return (
        <CmsFormExpandedDataSection>
            <CmsFormExpandedHeaderAndDataContainer>
                <CmsFormExpandedHeader>
                    User message:
                </CmsFormExpandedHeader>
                <CmsFormExpandedDataContent>
                    {message}
                </CmsFormExpandedDataContent>
            </CmsFormExpandedHeaderAndDataContainer>
        </CmsFormExpandedDataSection>
    );
};

export default CmsUserMessageExpandedRightData;