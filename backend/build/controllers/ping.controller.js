"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var PingController = /** @class */ (function () {
    function PingController() {
    }
    PingController.prototype.pingAPI = function (req, res) {
        return res.send('pong');
    };
    (0, tslib_1.__decorate)([
        (0, routing_controllers_1.Get)('/api'),
        (0, tslib_1.__param)(0, (0, routing_controllers_1.Req)()),
        (0, tslib_1.__param)(1, (0, routing_controllers_1.Res)()),
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], PingController.prototype, "pingAPI", null);
    PingController = (0, tslib_1.__decorate)([
        (0, routing_controllers_1.Controller)('/ping')
    ], PingController);
    return PingController;
}());
exports.PingController = PingController;
//# sourceMappingURL=ping.controller.js.map