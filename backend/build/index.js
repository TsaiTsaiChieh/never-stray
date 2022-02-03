"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
var App = require('./app').App;
var env = process.env.NODE_ENV;
dotenv_1.default.config({ path: ".env.".concat(env) });
var APP_PORT = parseInt(process.env.APP_PORT);
(function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var app;
    return (0, tslib_1.__generator)(this, function (_a) {
        app = App.bootstrap().app;
        app.listen(APP_PORT, function () {
            console.info("[".concat(env, "] Never-Stray App listening on ").concat(APP_PORT));
        });
        return [2 /*return*/];
    });
}); })();
//# sourceMappingURL=index.js.map