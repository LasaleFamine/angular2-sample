System.register(['angular2/core', '../models/mock-devices'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_devices_1;
    var DeviceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_devices_1_1) {
                mock_devices_1 = mock_devices_1_1;
            }],
        execute: function() {
            DeviceService = (function () {
                function DeviceService() {
                }
                DeviceService.prototype.getDevices = function () {
                    return Promise.resolve(mock_devices_1.DEVICES);
                };
                DeviceService.prototype.getDevicesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_devices_1.DEVICES); }, 2000);
                    });
                };
                DeviceService.prototype.getDevice = function (id) {
                    return Promise.resolve(mock_devices_1.DEVICES).then(function (devices) { return devices.filter(function (device) { return device.id === id; })[0]; });
                };
                DeviceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DeviceService);
                return DeviceService;
            }());
            exports_1("DeviceService", DeviceService);
        }
    }
});
//# sourceMappingURL=device.service.js.map