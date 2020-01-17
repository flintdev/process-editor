"use strict";
// src/redux/modules/fieldPanel/reducer.ts
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
const immutability_helper_1 = require("immutability-helper");
function reducer(state, action) {
    switch (action.type) {
        case (types.SET_PROJECT_NAME):
            return immutability_helper_1.default(state, {
                projectName: { $set: action.data },
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map