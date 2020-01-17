"use strict";
// src/redux/reducer.ts
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("./modules/project/reducer");
function reducer(state, action) {
    return {
        project: reducer_1.reducer(state.project, action),
    };
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map