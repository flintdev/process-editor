import { StoreState } from "./state";
import { RootAction } from "./modules/root/reducer";
export declare type Action = RootAction;
export declare function reducer(state: StoreState, action: Action): {
    root: object;
};
