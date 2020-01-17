import * as types from './types';
export interface SetProjectName {
    type: typeof types.SET_PROJECT_NAME;
    data: String;
}
export declare function setProjectName(data: String): SetProjectName;
export declare type ProjectAction = SetProjectName;
