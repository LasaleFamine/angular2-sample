System.register(['angular2/core', 'angular2/router', '../models/device', '../services/device.service'], function(exports_1, context_1) {
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
    var core_1, router_1, device_1, device_service_1;
    var DeviceDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (device_1_1) {
                device_1 = device_1_1;
            },
            function (device_service_1_1) {
                device_service_1 = device_service_1_1;
            }],
        execute: function() {
            DeviceDetailComponent = (function () {
                function DeviceDetailComponent(_deviceService, _routeParams) {
                    this._deviceService = _deviceService;
                    this._routeParams = _routeParams;
                }
                DeviceDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._deviceService.getDevice(id)
                        .then(function (device) { return _this.device = device; });
                };
                DeviceDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', device_1.Device)
                ], DeviceDetailComponent.prototype, "device", void 0);
                DeviceDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'device-detail',
                        templateUrl: 'app/templates/device-detail.component.html',
                        styleUrls: ['app/assets/css/device-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [device_service_1.DeviceService, (typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
                ], DeviceDetailComponent);
                return DeviceDetailComponent;
                var _a;
            }());
            exports_1("DeviceDetailComponent", DeviceDetailComponent);
        }
    }
});
//# sourceMappingURL=device-detail.component.js.map