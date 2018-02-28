import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Moment } from 'moment';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports:[
  	MapComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [MapService],
  bootstrap: [MapComponent]
})
export class MapModule { }
