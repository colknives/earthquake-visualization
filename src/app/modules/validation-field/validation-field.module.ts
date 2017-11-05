import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { ValidationFieldComponent } from './validation-field.component';
import { ValidationFieldService } from './validation-field.service';

@NgModule({
  declarations: [
    ValidationFieldComponent
  ],
  exports:[
  	ValidationFieldComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [ValidationFieldService],
  bootstrap: [ValidationFieldComponent]
})
export class ValidationFieldModule { }
