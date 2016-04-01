System.register(['angular2/core', './device-detail.component', '../services/device.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, device_detail_component_1, device_service_1, router_1;
    var DevicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (device_detail_component_1_1) {
                device_detail_component_1 = device_detail_component_1_1;
            },
            function (device_service_1_1) {
                device_service_1 = device_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DevicesComponent = (function () {
                function DevicesComponent(_router, _deviceService) {
                    this._router = _router;
                    this._deviceService = _deviceService;
                    this.title = 'Simpliest app Angular 2';
                }
                DevicesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._deviceService.getDevicesSlowly().then(function (devices) { return _this.devices = devices; });
                };
                DevicesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                DevicesComponent.prototype.onSelect = function (device) {
                    this.selectedDevice = device;
                };
                DevicesComponent.prototype.goToDetail = function () {
                    this._router.navigate(['DeviceDetail', { id: this.selectedDevice.id }]);
                };
                DevicesComponent = __decorate([
                    core_1.Component({
                        selector: 'devices',
                        template: "\n    \t<h2> My Devices </h2>\n    \t<ul class=\"devices\">\n    \t\t<li \n    \t\t\t*ngFor=\"#device of devices\"\n    \t\t\t[class.selected]=\"device === selectedDevice\"\n    \t\t\t(click)=\"onSelect(device)\">\n    \t\t\t<span class=\"badge\">{{device.id}}</span> {{device.name}}\n    \t\t</li>\n    \t</ul>\n    \t<div *ngIf=\"selectedDevice\">\n    \t\t<h2>\n    \t\t\t{{selectedDevice.name | uppercase}} is the device\n    \t\t</h2>\n    \t\t<button (click)=\"goToDetail()\">View Details</button>\n    \t</div>\n    \t",
                        styles: ["\n\t\t.selected {\n\t\t\tbackground-color: #CFD8DC !important;\n\t\t\tcolor: white;\n\t\t}\n\t\t.devices {\n\t\t\tmargin: 0 0 2em 0;\n\t\t\tlist-style-type: none;\n\t\t\tpadding: 0;\n\t\t\twidth: 15em;\n\t\t}\n\t\t.devices li {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tleft: 0;\n\t\t\tbackground-color: #EEE;\n\t\t\tmargin: .5em;\n\t\t\tpadding: .3em 0;\n\t\t\theight: 1.6em;\n\t\t\tborder-radius: 4px;\n\t\t}\n\t\t.devices li.selected:hover {\n\t\t\tbackground-color: #BBD8DC !important;\n\t\t\tcolor: white;\n\t\t}\n\t\t.devices li:hover {\n\t\t\tcolor: #607D8B;\n\t\t\tbackground-color: #DDD;\n\t\t\tleft: .1em;\n\t\t}\n\t\t.devices .text {\n\t\t\tposition: relative;\n\t\t\ttop: -3px;\n\t\t}\n\t\t.devices .badge {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: small;\n\t\t\tcolor: white;\n\t\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\t\tbackground-color: #607D8B;\n\t\t\tline-height: 1em;\n\t\t\tposition: relative;\n\t\t\tleft: -1px;\n\t\t\ttop: -4px;\n\t\t\theight: 1.8em;\n\t\t\tmargin-right: .8em;\n\t\t\tborder-radius: 4px 0 0 4px;\n\t\t}\n\t"],
                        directives: [device_detail_component_1.DeviceDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, device_service_1.DeviceService])
                ], DevicesComponent);
                return DevicesComponent;
                var _a;
            }());
            exports_1("DevicesComponent", DevicesComponent);
        }
    }
});
//# sourceMappingURL=devices.component.js.map