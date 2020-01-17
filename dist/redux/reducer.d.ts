import { StoreState } from "./state";
import { ProjectAction } from "./modules/project/reducer";
export declare type Action = ProjectAction;
export declare function reducer(state: StoreState, action: Action): {
    project: object;
};
