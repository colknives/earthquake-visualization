import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MapService } from './map.service';

declare var google: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	map: any;
	features: string[];
	circle: any;

	constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private MapService: MapService
  ) {}


	ngOnInit(): void {

		var mapProp = {
            center: new google.maps.LatLng(12.750000,121.370000),
            zoom: 6,
            mapTypeId: 'terrain'
        };

      	this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      	this.MapService.map = this.map;
      	var infowindow = new google.maps.InfoWindow();
      	this.circle = new google.maps.Circle();
      	this.features = this.map.data.addGeoJson();
      	this.MapService.features = this.features;

      	this.map.data.setStyle(function(feature) {
          var magnitude = feature.getProperty('mag');
          return {
            icon: {
	          path: google.maps.SymbolPath.CIRCLE,
	          fillColor: 'red',
	          fillOpacity: .2,
	          scale: Math.pow(2, magnitude) / 2,
	          strokeColor: 'red',
	          strokeWeight: .5
	        }
          };
        });

        this.map.data.addListener('click', function(event) {

          var date = new Date(event.feature.getProperty("time"));

		  var content = '<div id="content">'+
		  	'<p><strong>Place:</strong> '+event.feature.getProperty("place")+'</p>'+
		  	'<p><strong>Datetime:</strong> '+date.toDateString()+' '+date.toLocaleTimeString()+'</p>'+
		  	'<p><strong>Magnitude:</strong> '+event.feature.getProperty("mag")+'</p>'+
		  	'<p><strong>Source:</strong> <a href="'+event.feature.getProperty("url")+'" target="_blank">'+event.feature.getProperty("url")+'</a></p>'+
            '</div>';

	      infowindow.setContent(content);
	      infowindow.setPosition(event.feature.getGeometry().get());
	      infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
	      infowindow.open(this.map);

		});

  	}

}
