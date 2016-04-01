import { Component, OnInit } from 'angular2/core';

import { Device } from './models/device';
import { DeviceService } from '../services/device.service';

import { Router } from 'angular2/router';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/templates/dashboard.component.html',
	styleUrls: ['app/assets/css/dashboard.component.css']
})

export class DashboardComponent { 
	// Define 'devices' as empty array of Device model
	devices: Device[] = [];
	// Instance the construct of our service
	constructor(
		private _router: Router,
		private _deviceService: DeviceService) { }

	// On app init, get first 5 devices
	ngOnInit() {
		this._deviceService.getDevices()
			.then(devices => this.devices = devices.slice(1, 5));
	}


	// goToDetail func
	goToDetail(device: Device) {
		let link = ['DeviceDetail', { id: device.id }];
		this._router.navigate(link);

	}


 }