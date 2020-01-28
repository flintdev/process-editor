"use strict";
// src/redux/reducer.ts
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("./modules/root/reducer");
const reducer_2 = require("./modules/editor/reducer");
function reducer(state, action) {
    return {
        root: reducer_1.reducer(state.root, action),
        editor: reducer_2.reducer(state.editor, action),
    };
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map