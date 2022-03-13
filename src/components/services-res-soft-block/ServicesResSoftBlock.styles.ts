/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: ServicesResSoftBlock.styles.ts
 * Last modified: 12/03/2022, 14:55
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
import { a_rs } from '../../styles/reset.styles';

export const ServicesResSoftBlockContainer = styled.div`
    position: relative;
    height: 120px;
    background-color: var(--${({ theme }) => theme.$ifDark ? 'cyanDarker' : 'whiteClean'});
    box-shadow: var(--${({ theme }) => theme.$ifDark ? 'basicBoxShadow' : 'blockBoxShadow'});
    border-radius: 8px;
    padding: 20px;
`;

export const ServicesResSoftLinkElement = styled(a_rs)`
    margin-top: 25px;
    padding-top: 10px;
    bottom: 10px;
    right: 0;
    position: absolute;
    color: var(--${({ theme }) => theme.$ifDark ? 'cyanDark' : 'grayDark'});
    transition: .4s color ease-in-out;
    ::before, ::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: var(--${({ theme }) => theme.$ifDark ? 'cyanDark' : 'grayDark'});
    }
    ::after {
        width: 0;
        transition: .4s;
        background-color: var(--${({ theme }) => theme.$ifDark ? 'whiteClean' : 'cyanDark'});
    }
    :hover {
        color: var(--${({ theme }) => theme.$ifDark ? 'whiteClean' : 'cyanDark'});
        span {
            padding-right: 50px;
        }
        ::after {
            width: 100%;
        }
    }
    span {
        transition: .4s;
        padding-right: 30px;
    }
`;

export const ServicesRefSoftShortBlockAndTitle = styled.div`
    display: flex;
    align-items: center;
`;

export const ServicesRefSoftTitle = styled.div`
    color: var(--${({ theme }) => theme.$ifDark ? 'whiteClean' : 'blackLight'});
    font-size: 1.5rem;
    margin-left: 20px;
`;

export const ServicesResSoftShortBlock = styled.div`
    font-family: 'O', sans-serif;
    background-color: var(--${({ theme }) => theme.$ifDark ? 'whiteClean' : 'cyanDark'});
    color: var(--${({ theme }) => theme.$ifDark ? 'cyanDark' : 'whiteClean'});
    width: fit-content;
    font-size: 1.6rem;
    border-radius: 5px;
    padding: 5px 8px 4px;
`;