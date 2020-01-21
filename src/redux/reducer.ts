// src/redux/reducer.ts

import {StoreState} from "./state";
import {reducer as RootReducer, RootAction} from "./modules/root/reducer";

export type Action = RootAction;

export function reducer(state: StoreState, action: Action) {
    return {
        root: RootReducer(state.root, action),
    }
}
