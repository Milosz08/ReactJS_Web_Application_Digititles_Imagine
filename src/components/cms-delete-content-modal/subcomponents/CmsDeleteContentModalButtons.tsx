/*
 * Copyright (c) 2022 by MILOSZ GILGA <https://miloszgilga.pl>
 *
 * File name: CmsDeleteContentModalButtons.tsx
 * Last modified: 02/04/2022, 23:09
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
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { ReduxAPIThunk } from '../../../redux/redux-api-thunk/thunk';
import { ReduxDOMActions } from '../../../redux/redux-dom-manipulate/actions';
import { InitStateAPItypes } from '../../../redux/redux-api-thunk/initialState';
import { InitStateDOMtypes } from '../../../redux/redux-dom-manipulate/initialState';
import { AllModals, DeleteModalPlaceholders } from '../../../redux/redux-dom-manipulate/types';

import { ModalButtonElement, ModalButtonsContainer } from '../../../styles/modals.styles';


const CmsDeleteContentModalButtons: React.FC = (): JSX.Element => {

    const { deleteModalData }: InitStateDOMtypes = useSelector((state: RootState) => state.reduxReducerDOM);
    const { sessionInfo }: InitStateAPItypes = useSelector((state: RootState) => state.reduxGlobalReducer);

    const { dataId, dataContent, endpoint } = deleteModalData;
    const dispatcher = useDispatch();

    const handleRemoveCmsFormContent = (ifRemoveContent: boolean): void => {
        dispatcher(ReduxDOMActions.changeModalVisibility(AllModals.DELETE_CONTENT));
        setTimeout(() => {
            if (ifRemoveContent) {
                dispatcher(ReduxAPIThunk.removeElementFromArray(dataId!, dataContent!, endpoint!, {
                    Authorization: sessionInfo.bearerToken
                }));
            }
            dispatcher(ReduxDOMActions.insertDeleteContentData(null, null, null));
        }, 1000);
    };

    return (
        <ModalButtonsContainer>
            <ModalButtonElement
                title = 'Click to remove element'
                onClick = {() => handleRemoveCmsFormContent(true)}
                $ifHollow = {true}
            >
                Delete {DeleteModalPlaceholders[deleteModalData.dataContent!]}
            </ModalButtonElement>
            <ModalButtonElement
                title = 'Click to close modal without removing element'
                onClick = {() => handleRemoveCmsFormContent(false)}
            >
                Close modal
            </ModalButtonElement>
        </ModalButtonsContainer>
    );
};

export default CmsDeleteContentModalButtons;