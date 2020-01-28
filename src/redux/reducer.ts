// src/redux/reducer.ts

import {StoreState} from "./state";
import {reducer as RootReducer, RootAction} from "./modules/root/reducer";
import {reducer as EditorReducer, EditorAction} from "./modules/editor/reducer";

export type Action = RootAction | EditorAction;

export function reducer(state: StoreState, action: Action) {
    return {
        root: RootReducer(state.root, action as RootAction),
        editor: EditorReducer(state.editor, action as EditorAction),
    }
}
