import {Component} from 'angular2/core';
import {Device} from '../models/device';
import {DeviceDetailComponent} from './device-detail.component';
import {DeviceService} from '../services/device.service';
import {Router} from 'angular2/router';


@Component({
    selector: 'devices',
    template: `
    	<h2> My Devices </h2>
    	<ul class="devices">
    		<li 
    			*ngFor="#device of devices"
    			[class.selected]="device === selectedDevice"
    			(click)="onSelect(device)">
    			<span class="badge">{{device.id}}</span> {{device.name}}
    		</li>
    	</ul>
    	<div *ngIf="selectedDevice">
    		<h2>
    			{{selectedDevice.name | uppercase}} is the device
    		</h2>
    		<button (click)="goToDetail()">View Details</button>
    	</div>
    	`,
    styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.devices {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.devices li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.devices li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.devices li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.devices .text {
			position: relative;
			top: -3px;
		}
		.devices .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`],
	directives: [DeviceDetailComponent]
})

export class DevicesComponent { 
	public title = 'Simpliest app Angular 2';
	devices: Device[];
	selectedDevice: Device;

	constructor(
		private _router: Router,
		private _deviceService: DeviceService) {}

	getHeroes() {
		this._deviceService.getDevicesSlowly().then(devices => this.devices = devices);
	}

	ngOnInit() {
		this.getHeroes();
	}	

	onSelect(device: Device) { 
		this.selectedDevice = device;
	 }

	 goToDetail() {
	 	this._router.navigate(['DeviceDetail', { id: this.selectedDevice.id }])
	 }
}