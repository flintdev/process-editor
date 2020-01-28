// src/redux/modules/editor/actions.ts

import * as types from './types';

export interface SetEditorJSON {
    type: typeof types.SET_EDITOR_JSON,
    data: object
}

export function setEditorJSON(data: object): SetEditorJSON {
    return { 
        type: types.SET_EDITOR_JSON,
        data
    }
}

export type EditorAction = SetEditorJSON;
