import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class ValidationFieldService {
    private subject = new Subject<any>();

    form: FormGroup;
    private formSumitAttempt: boolean;
    msg: string[];

    initializeForm(form: FormGroup){

        //Save provided form
        this.form = form;
    }
 
    isFieldValid(field: string) {

        //Check if specified field is invalid
        return (
          (!this.form.get(field).valid && this.form.get(field).touched) ||
          (this.form.get(field).untouched && this.formSumitAttempt)
        );
    }

    displayFieldCss(field: string) {

        //Return has-danger class if provided field is valid
        return {
          'has-danger': this.isFieldValid(field)
        };
    }

    getError(field: string, label:string){

        let msg: string;

        //Provide error message for the provided field
       if(this.isFieldValid(field)){

           if( this.form.get(field).errors.required ){
               msg = label + " is required";
           }

       }

       return msg;
    }

    validateAllFormFields(formGroup: FormGroup) {

        this.formSumitAttempt = true;

        //Validate each fields in the form
        Object.keys(formGroup.controls).forEach(field => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
          }
        });
    }


}