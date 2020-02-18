"use strict";
// src/redux/modules/editor/reducer.ts
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
const immutability_helper_1 = require("immutability-helper");
function reducer(state, action) {
    switch (action.type) {
        case (types.SET_EDITOR_JSON):
            return immutability_helper_1.default(state, {
                editorJSON: { $set: action.data },
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map