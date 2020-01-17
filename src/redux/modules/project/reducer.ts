// src/redux/modules/fieldPanel/reducer.ts

import * as types from './types';
import update from 'immutability-helper';
import {ProjectAction} from "./actions";

export function reducer(state: object, action: ProjectAction) {
    switch (action.type) {
        case(types.SET_PROJECT_NAME):
            return update(state, {
                projectName: {$set: action.data},
            });
        default:
            return state;
    }
}

export {ProjectAction};