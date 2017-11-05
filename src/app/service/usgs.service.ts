import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { appConfig } from './../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class USGSService {

	constructor(private http: Http) { }

	search(from:string, to:string) {

        return this.http.get(appConfig.apiUrl + 'query?format=geojson&starttime='+from+'&endtime='+to+'&minlatitude=4.40&minlongitude=116.40&maxlatitude=21.10&maxlongitude=126.34&orderby=time-asc').map(response => response.json());
    }
    
}