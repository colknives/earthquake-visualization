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

        return this.http.get(appConfig.apiUrl + 'query?format=geojson&starttime='+from+'&endtime='+to+'&minlatitude=4.40&minlongitude=116.40&maxlatitude=21.10&maxlongitude=126.34&orderby=time-asc').map(response => response.json());
    }

    searchEarthquake(from:string, to:string){

    	return this.search(from, to)
	        .subscribe(
	          data => {

				for (var i = 0; i < this.features.length; i++){
  					this.map.data.remove(this.features[i]);
				}

		        this.features = this.map.data.addGeoJson(data);

		        return true;

	    });

    }

    clearEarthquakes(){

    	for (var i = 0; i < this.features.length; i++){
				this.map.data.remove(this.features[i]);
		}

		return true;

    }

    addEarthquakes(data:string[]){

    	this.clearEarthquakes();
    	this.features = this.map.data.addGeoJson(data);

    	return true;

    }
    
}