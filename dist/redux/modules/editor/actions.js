"use strict";
// src/redux/modules/editor/actions.ts
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
function setEditorJSON(data) {
    return {
        type: types.SET_EDITOR_JSON,
        data
    };
}
exports.setEditorJSON = setEditorJSON;
//# sourceMappingURL=actions.js.map