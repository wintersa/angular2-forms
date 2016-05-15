import {Component} from 'angular2/core';
import {FormBuilder} from 'angular2/common';
import {OnInit} from 'angular2/core';
import {ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'my-data-driven',
    template: `
          <h2>Sign-up form</h2>
          <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
              <div>
                  <label for="mail">Mail</label>
                  <input [ngFormControl]="myForm.controls['email']" type="text" id="mail">
                  <span class="validation-error">Not valid</span>
              </div>
              <div>
                  <label for="password">Password</label>
                  <input [ngFormControl]="myForm.controls['password']" type="text" id="password">
                  <span class="validation-error">Not valid</span>
              </div>
              <div>
                  <label for="confirm-password">Confirm Password</label>
                  <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password">
                  <span class="validation-error">Not valid</span>
              </div>
              <button type="submit">Submit</button>
          </form>
          <h2>You submitted</h2>
          <div>Mail: {{user.mail}}</div>
          <div>Password: {{user.password}}</div>

    `
})

export class DataDrivenFormComponent implements OnInit{
    myForm: ControlGroup;
    user = {mail: '', password: ''};

    constructor(private _formBuilder: FormBuilder ){}

    onSubmit(form){
        console.log(this.myForm);
    }

    ngOnInit():any {
       this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required],
       });
    }
}
