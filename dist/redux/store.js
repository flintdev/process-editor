"use strict";
// src/redux/store.ts
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const state_1 = require("./state");
const reducer_1 = require("./reducer");
const redux_thunk_1 = require("redux-thunk");
exports.store = redux_1.createStore(reducer_1.reducer, state_1.initState, redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=store.js.map