/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsTextareasAddNewArea.tsx
 * Last modified: 05/04/2022, 21:17
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
import { useDispatch } from 'react-redux';

import { ReduxAPIActions } from '../../../redux/redux-api-thunk/actions';
import { DiscretteProjectSections } from '../../../redux/redux-api-thunk/types';

import { CmsTextareasAddNewAreaButton } from '../CmsTextareasListsStructure.styles';

interface PropsProvider {
    section: DiscretteProjectSections;
}

const CmsTextareasAddNewArea: React.FC<PropsProvider> = ({ section }): JSX.Element => {

    const dispatcher = useDispatch();

    const handleAddNewSection = (): void => {
        dispatcher(ReduxAPIActions.addProjectArrayParagraphElement(section));
    };

    return (
        <CmsTextareasAddNewAreaButton
            title = {`Click to add new paragraph in ${section.toLocaleLowerCase()} section`}
            type = 'button'
            onClick = {handleAddNewSection}
        >
            Add new paragraph
        </CmsTextareasAddNewAreaButton>
    );
};

export default CmsTextareasAddNewArea;