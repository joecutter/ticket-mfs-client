import { FormGroup, AbstractControl } from '@angular/forms';
import { ServiceService } from '../provider/index';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function ValidateEmailNotTaken(serviceService: ServiceService) {
  return (control: AbstractControl) => {
    return serviceService.getEmail(control.value).map(res => {
      return res ? null : { emailTaken: true };
    });
  };
}

