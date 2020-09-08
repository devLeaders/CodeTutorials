"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
var configAxios_1 = __importDefault(require("../../config/axios/configAxios"));
function signUp(obj) {
    return configAxios_1.default.post("/auth/signup", obj);
}
exports.signUp = signUp;
function signIn(obj) {
    return configAxios_1.default.post("/auth/signin", obj);
}
exports.signIn = signIn;
