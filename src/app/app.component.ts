import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MapService } from './modules/map/map.service';
import { ValidationFieldService } from './modules/validation-field/validation-field.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  	searchForm: FormGroup;
	map: any;
	features: string[];
	circle: any;
	processing:boolean = false;
	connectError:boolean = false;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private mapService: MapService,
    private validationFieldService: ValidationFieldService,
    private fb: FormBuilder
  ) {}


	ngOnInit(): void {

		this.searchForm = this.fb.group({
	      'from': new FormControl(null, [
	      		Validators.required
	       ]),
	      'to': new FormControl(null, [
	      		Validators.required
	      	]),
	    });

	    //Initialize validation service
    	this.validationFieldService.initializeForm(this.searchForm);

  	}

  	save(form){

  		if (this.searchForm.valid) {

  			this.processing = true;
  			this.connectError = false;

  			console.log(this.connectError);

  			this.mapService.search(form.from, form.to).subscribe(
		    	data => {

		          	this.processing = false;
		          	this.mapService.addEarthquakes(data);

			        return true;

		    	},
		      	error => {
		        	
		        	this.processing = false;
		        	this.connectError = true;

		      	}
		    );
	    }
	    else{
	    	this.validationFieldService.validateAllFormFields(this.searchForm);
	    }

  	}

  	clear(){

  		this.mapService.clearEarthquakes();

  	}

}
