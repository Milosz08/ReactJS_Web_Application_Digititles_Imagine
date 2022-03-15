/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: GettingStartedMultipleRefsContext.tsx
 * Last modified: 15/03/2022, 00:49
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
import { createContext } from 'react';

import useMultipleRefs from '../../hooks/reusable/useMultipleRefs';

interface SingleNavigateRefElement {
    header: React.MutableRefObject<any>;
    childrens: React.MutableRefObject<any>;
}

export type NavigateRefsContextTypes =  {
    allRefs: React.MutableRefObject<any>[];
    service: SingleNavigateRefElement;
    size: SingleNavigateRefElement;
    budget: SingleNavigateRefElement;
    registration: SingleNavigateRefElement;
};

export const NavigateRefsContext = createContext<Partial<NavigateRefsContextTypes>>({});


interface PropsProvider {
    children: React.ReactNode;
}

const GettingStartedMultipleRefsContext: React.FC<PropsProvider> = ({ children }) => {

    const { elRefs } = useMultipleRefs(4);
    const { elRefs: sectionRefs } = useMultipleRefs(8);

    const [
        headerServ, childrenServ, headerSize, childrenSize, headerBudget, childrenBudget,
        headerRegistr, childrenRegistr
    ] = sectionRefs;

    const valueObject = {
        allRefs: elRefs,
        service: { header: headerServ, childrens: childrenServ },
        size: { header: headerSize, childrens: childrenSize },
        budget: { header: headerBudget, childrens: childrenBudget },
        registration: { header: headerRegistr, childrens: childrenRegistr },
    }

    return (
        <NavigateRefsContext.Provider
            value = {valueObject}
        >
            {children}
        </NavigateRefsContext.Provider>
    );
};

export default GettingStartedMultipleRefsContext;