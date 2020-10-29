"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var server = app_1.default.listen(app_1.default.get("port"), function () {
    console.log("App is listening on http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
});
var apiLog = {
    api: 'Api logging test',
    data: Math.random()
};
var appLog = {
    app: 'App logging test',
    data: Math.random()
};
setInterval(function () {
    console.log('%O', apiLog);
}, 30000);
setInterval(function () {
    console.log('%O', appLog);
}, 60000);
exports.default = server;
//# sourceMappingURL=server.js.map