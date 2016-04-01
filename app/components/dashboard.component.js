System.register(['angular2/core', '../services/device.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, device_service_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (device_service_1_1) {
                device_service_1 = device_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                // Instance the construct of our service
                function DashboardComponent(_router, _deviceService) {
                    this._router = _router;
                    this._deviceService = _deviceService;
                    // Define 'devices' as empty array of Device model
                    this.devices = [];
                }
                // On app init, get first 5 devices
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._deviceService.getDevices()
                        .then(function (devices) { return _this.devices = devices.slice(1, 5); });
                };
                // goToDetail func
                DashboardComponent.prototype.goToDetail = function (device) {
                    var link = ['DeviceDetail', { id: device.id }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/templates/dashboard.component.html',
                        styleUrls: ['app/assets/css/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, device_service_1.DeviceService])
                ], DashboardComponent);
                return DashboardComponent;
                var _a;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map