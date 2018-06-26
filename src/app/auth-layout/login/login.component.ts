import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  form: FormGroup;
  checked = false;

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', [ Validators.required, Validators.email ]),
      'password': new FormControl('', [ Validators.required ])
    });
  }

  getErrorMessageEmail() {
    return this.form.get('email').hasError('required') ? 'This field is mandatory' :
      this.form.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePassword() {
    return this.form.get('password').hasError('required') ? 'This field is mandatory' :
      '';
  }

  onSubmit() {
    console.log(this.form);
  }
}
