/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: LoginPageReact.tsx
 * Last modified: 24/02/2022, 14:26
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
import UniversalPageMainContentHOC from '../high-order-components/UniversalPageMainContentHOC';
import Footer from '../components/footer/Footer';
import SubpagesLoginFormContent from '../components/subpages-left-content/subcomponents/SubpagesLoginFormContent';

const LoginPageReact: React.FC = (): JSX.Element => (
    <>
        <UniversalPageMainContentHOC
            showBackgroundOnLoad = {true}
            images = {[ 'login' ]}
            LeftComponent = {SubpagesLoginFormContent}
        />
        <Footer/>
    </>
);

export default LoginPageReact;