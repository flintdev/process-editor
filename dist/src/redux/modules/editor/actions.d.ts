import * as types from './types';
export interface SetEditorJSON {
    type: typeof types.SET_EDITOR_JSON;
    data: object;
}
export declare function setEditorJSON(data: object): SetEditorJSON;
export declare type EditorAction = SetEditorJSON;
