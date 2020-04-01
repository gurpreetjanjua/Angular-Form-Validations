import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'form-error',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
    @Input() control: FormControl;
    @Input() name: string;
    constructor() { }

    ngOnInit(): void {
    }

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return this.getErrorMsg(propertyName, this.control.errors);
            }
        }
        return null;
    }

    getErrorMsg(validatorName: string, validatorValue?: any) {
        let errors = {
            firstName: {
                required: 'This field is required',
                pattern: 'This field can be only alphabetic',
                minlength: `This field Minimum length should be ${validatorValue[validatorName].requiredLength}`,
                maxlength: `This field Maximum length should be ${validatorValue[validatorName].requiredLength}`
            },
            lastName: {
                required: 'This field is required',
                pattern: 'This field can be only alphabetic',
                minlength: `This field Minimum length should be ${validatorValue[validatorName].requiredLength}`,
                maxlength: `This field Maximum length should be ${validatorValue[validatorName].requiredLength}`
            },
            email: {
                required: 'This field is required',
                email: 'Please enter a valid email address'
            },
            password: {
                required: 'This field is required',
                pattern: 'Password Pattern should be 1 Uppercase, 1 Special Character, 1 Number and Minimum 8 Characters',
                minlength: `This field Minimum length should be ${validatorValue[validatorName].requiredLength}`,
                maxlength: `This field Maximum length should be ${validatorValue[validatorName].requiredLength}`,
            },
            confirmpassword: {
                required: 'This field is required',
                pattern: 'Password Pattern should be 1 Uppercase, 1 Special Character, 1 Number and Minimum 8 Characters',
                minlength: `This field Minimum length should be ${validatorValue[validatorName].requiredLength}`,
                maxlength: `This field Maximum length should be ${validatorValue[validatorName].requiredLength}`,
            },
            name: {
                required: 'This field is required',
                pattern: 'This field can be only alphabetic',
                minlength: `This field Minimum length should be ${validatorValue[validatorName].requiredLength}`,
                maxlength: `This field Maximum length should be ${validatorValue[validatorName].requiredLength}`,
            }
        };
        return errors[this.name][validatorName];
    }

}
