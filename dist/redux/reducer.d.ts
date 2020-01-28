import { StoreState } from "./state";
import { RootAction } from "./modules/root/reducer";
import { EditorAction } from "./modules/editor/reducer";
export declare type Action = RootAction | EditorAction;
export declare function reducer(state: StoreState, action: Action): {
    root: object;
    editor: object;
};
