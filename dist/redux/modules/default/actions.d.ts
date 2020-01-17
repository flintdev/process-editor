import * as types from './types';
export interface AddSubfield {
    type: typeof types.PROJECT_NAME;
}
export declare function getProjectName(): AddSubfield;
export declare type DefaultAction = AddSubfield;
