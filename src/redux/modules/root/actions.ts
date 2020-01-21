// src/redux/modules/default/actions.ts

import * as types from './types';

export interface SetProjectName {
    type: typeof types.SET_PROJECT_NAME,
    data: String
}

export function setProjectName(data: String): SetProjectName {
    return { 
        type: types.SET_PROJECT_NAME,
        data
    }
}

export type RootAction = SetProjectName;
