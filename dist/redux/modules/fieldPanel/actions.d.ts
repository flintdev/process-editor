import * as types from './types';
export interface AddSubfield {
    type: typeof types.ADD_SUBFIELD;
}
export declare function addSubfield(): AddSubfield;
export declare type FieldPanelAction = AddSubfield;
