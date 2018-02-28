import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { ValidationFieldModule } from './modules/validation-field/validation-field.module';
import { MapModule } from './modules/map/map.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';

// import { MapComponent } from './components/map/map.component';
import { MapService } from './modules/map/map.service';

export const MY_MOMENT_FORMATS = {
    parseInput: 'l LT',
    fullPickerInput: 'l LT',
    datePickerInput: 'YYYY-MM-DD',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
  declarations: [
    AppComponent,
    // MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OwlDateTimeModule, 
    OwlMomentDateTimeModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff',
        fullScreenBackdrop: true
    }),
    ValidationFieldModule,
    MapModule
  ],
  providers: [
    MapService,
    { 
        provide: OWL_DATE_TIME_FORMATS, 
        useValue: MY_MOMENT_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
