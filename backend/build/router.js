"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var routing_controllers_1 = require("routing-controllers");
var ping_controller_1 = require("./controllers/ping.controller");
/** @class Router */
var Router = /** @class */ (function () {
    function Router() {
    }
    /**
     * @static
     * @memberof Router
     * @param  {Application} app
     */
    Router.router = function (app) {
        (0, routing_controllers_1.useExpressServer)(app, {
            routePrefix: 'api',
            controllers: [ping_controller_1.PingController],
        });
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=router.js.map