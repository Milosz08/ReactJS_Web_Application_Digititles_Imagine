/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsModifySingleProjectPageReact.tsx
 * Last modified: 24/02/2022, 15:47
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

import useInsertProjectInModifyProjectPage from '../hooks/cms-page/useInsertProjectInModifyProjectPage';

import CmsProjectFormContent from '../components/cms-project-form-content/CmsProjectFormContent';


const CmsModifySingleProjectPageReact: React.FC = (): JSX.Element => {

    const findingProject = useInsertProjectInModifyProjectPage();
    
    return (
        <>
            {Boolean(findingProject) && <>
                <CmsProjectFormContent
                    loadProjectId = {findingProject!.id}
                />
            </>}
        </>
    );
};

export default CmsModifySingleProjectPageReact;
