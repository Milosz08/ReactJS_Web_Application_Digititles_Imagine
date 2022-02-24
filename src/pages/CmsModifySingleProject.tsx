/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsModifySingleProject.tsx
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
import { useParams } from 'react-router';
import useChangePageTitle from '../hooks/reusable/useChangePageTitle';

const CmsModifySingleProject: React.FC = (): JSX.Element => {

    const { projectId } = useParams();
    useChangePageTitle(projectId!, true);

    return (
        <>
            modify single project: {projectId}
        </>
    );
};

export default CmsModifySingleProject;
