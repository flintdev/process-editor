// src/redux/reducer.ts

import {StoreState} from "./state";
import {reducer as ProjectReducer, ProjectAction} from "./modules/project/reducer";

export type Action = ProjectAction;

export function reducer(state: StoreState, action: Action) {
    return {
        project: ProjectReducer(state.project, action),
    }
}
