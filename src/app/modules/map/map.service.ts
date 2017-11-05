import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { appConfig } from './../../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {

	map:any;
	features: string[];

	constructor(private http: Http) { }

	search(from:string, to:string) {

		//Access usgs data base on the provided dates within the Philippines
        return this.http.get(appConfig.apiUrl + 'query?format=geojson&starttime='+from+'&endtime='+to+'&minlatitude=4.40&minlongitude=116.40&maxlatitude=21.10&maxlongitude=126.34&orderby=time-asc').map(response => response.json());
    }

    clearEarthquakes(){

    	//Remove all earthquake data
    	for (var i = 0; i < this.features.length; i++){
				this.map.data.remove(this.features[i]);
		}

		return true;

    }

    addEarthquakes(data:string[]){

    	//Clear and add new earthquake data base on provided data
    	this.clearEarthquakes();
    	this.features = this.map.data.addGeoJson(data);

    	return true;

    }
    
}