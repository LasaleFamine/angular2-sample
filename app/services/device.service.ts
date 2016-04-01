import {Injectable} from 'angular2/core';

import {Device} from '../models/device';
import {DEVICES} from '../models/mock-devices';

@Injectable()
export class DeviceService {
	getDevices() {
		return Promise.resolve(DEVICES);
	}

	getDevicesSlowly() {
		return new Promise<Device[]>(resolve =>
			setTimeout(() => resolve(DEVICES), 2000)
		);
	}

	getDevice(id: number) {
		return Promise.resolve(DEVICES).then(
			devices => devices.filter(device => device.id === id)[0]
		);
	}
}