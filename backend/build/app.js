"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var express_1 = (0, tslib_1.__importDefault)(require("express"));
var router_1 = require("./router");
/** @class App */
var App = /** @class */ (function () {
    /** @memberof App */
    function App() {
        this.app = (0, express_1.default)();
        this.router();
    }
    /**
     * Bootstrap the application
     *
     * @static
     * @memberof App
     * @return {App}
     */
    App.bootstrap = function () {
        return new App();
    };
    /** Add router */
    App.prototype.router = function () {
        router_1.Router.router(this.app);
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map