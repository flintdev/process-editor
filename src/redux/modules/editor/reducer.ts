// src/redux/modules/editor/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {EditorAction} from "./actions";

export function reducer(state: object, action: EditorAction) {
    switch (action.type) {
        case(types.SET_EDITOR_JSON):
            return update(state, {
                editorJSON: {$set: action.data},
            });
        default:
            return state;
    }
}

export {EditorAction};