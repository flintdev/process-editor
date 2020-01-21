"use strict";
// src/redux/modules/default/actions.ts
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("./types");
function setProjectName(data) {
    return {
        type: types.SET_PROJECT_NAME,
        data
    };
}
exports.setProjectName = setProjectName;
//# sourceMappingURL=actions.js.map