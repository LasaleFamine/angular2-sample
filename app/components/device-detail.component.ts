import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Device } from '../models/device';
import { DeviceService } from '../services/device.service';

@Component({
	selector: 'device-detail',
	templateUrl: 'app/templates/device-detail.component.html',
	styleUrls: ['app/assets/css/device-detail.component.css']
})
export class DeviceDetailComponent {
	@Input()
	device: Device; 

	constructor(
		private _deviceService: DeviceService,
		private _routeParams: RouteParams) {

	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._deviceService.getDevice(id)
			.then(device => this.device = device);
	}

	goBack() {
		window.history.back();
	}

}

