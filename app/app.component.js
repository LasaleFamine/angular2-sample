System.register(['angular2/core', 'angular2/router', './components/dashboard.component', './services/device.service', './components/devices.component', './components/device-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, device_service_1, devices_component_1, device_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (device_service_1_1) {
                device_service_1 = device_service_1_1;
            },
            function (devices_component_1_1) {
                devices_component_1 = devices_component_1_1;
            },
            function (device_detail_component_1_1) {
                device_detail_component_1 = device_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'ng2-example';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng2-example',
                        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\n\t\t\t<a [routerLink]=\"['Devices']\">Devices</a>\n\t\t<router-outlet></router-outlet>\n\t\t",
                        styleUrls: ['app/assets/css/app.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            device_service_1.DeviceService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dash',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/devices',
                            name: 'Devices',
                            component: devices_component_1.DevicesComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'DeviceDetail',
                            component: device_detail_component_1.DeviceDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map