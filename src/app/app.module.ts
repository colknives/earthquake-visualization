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

import { DateTimePickerModule } from 'ng-pick-datetime';

// import { MapComponent } from './components/map/map.component';
import { MapService } from './modules/map/map.service';

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
    DateTimePickerModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff', 
        secondaryColour: '#ffffff', 
        tertiaryColour: '#ffffff'
    }),
    ValidationFieldModule,
    MapModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
