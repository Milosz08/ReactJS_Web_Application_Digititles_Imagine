/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsMainHeaderInfo.styles.ts
 * Last modified: 21/03/2022, 16:42
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

import styled from 'styled-components';

export const CmsMainHeaderInfoWrapper = styled.div`
    background-color: var(--whiteDark);
    max-width: 1300px;
    width: 100%;
    margin: 140px 0 60px;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
        align-items: center;
        margin: 80px 0 60px;
    }
`;

export const CmsPropertiesInfoContainer = styled.div`
    display: flex;
    font-size: 1.1rem;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CmsMainHeaderDescriptionAndValueContainer = styled.div<{ $ifNoMargin?: boolean }>`
    display: flex;
    margin-left: ${({ $ifNoMargin }) => $ifNoMargin ? 0 : '50px'};
    @media only screen and (max-width: 1030px) {
        margin: 3px 0;
    }
`;

export const CmsMainHeaderDescription = styled.div`
    margin-right: 8px;
    color: var(--blackLight);
`;

export const CmsMainHeaderValue = styled.div`
    text-transform: capitalize;
    color: var(--cyanDark);
    font-weight: 500;
    min-width: 50px;
`;