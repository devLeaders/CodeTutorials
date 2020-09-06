"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var configAxios_1 = __importDefault(require("../../config/axios/configAxios"));
function signUp(obj) {
    return configAxios_1.default.post("/signup", obj);
}
exports.signUp = signUp;
function signIn(obj) {
    return configAxios_1.default.post("/signin", obj);
}
exports.signIn = signIn;
