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
        this.form = form;
    }
 
    isFieldValid(field: string) {

        return (
          (!this.form.get(field).valid && this.form.get(field).touched) ||
          (this.form.get(field).untouched && this.formSumitAttempt)
        );
    }

    displayFieldCss(field: string) {
        return {
          'has-danger': this.isFieldValid(field)
        };
    }

    getError(field: string, label:string){

        let msg: string;

       if(this.isFieldValid(field)){

           if( this.form.get(field).errors.required ){
               msg = label + " is required";
           }

       }

       return msg;
    }

    validateAllFormFields(formGroup: FormGroup) {

        this.formSumitAttempt = true;

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