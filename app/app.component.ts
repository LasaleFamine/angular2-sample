import { Component } 		from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './components/dashboard.component';
import { DeviceService }	from './services/device.service';
import { DevicesComponent }	from './components/devices.component';
import { DeviceDetailComponent } from './components/device-detail.component';

@Component({
	selector: 'ng2-example',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Devices']">Devices</a>
		<router-outlet></router-outlet>
		`,
	styleUrls: ['app/assets/css/app.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		DeviceService
	]
}) 

@RouteConfig([
	{
		path: '/dash',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/devices',
		name: 'Devices',
		component: DevicesComponent
	},
	{
		path: '/detail/:id',
		name: 'DeviceDetail',
		component: DeviceDetailComponent
	}
])

export class AppComponent {
	title = 'ng2-example'
}