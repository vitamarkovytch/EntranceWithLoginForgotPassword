import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ServerService} from '../../shared/service/server.service';
import {DataService} from '../../shared/service/data.service';
import {Message} from '../../shared/models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private server: ServerService,
              private dataService: DataService,
              private router: Router) {
  }

  form: FormGroup;
  checked = false;
  message: Message;

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
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
    const emailPass = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.server.login(emailPass).subscribe(
      data => {
        if (data['error'] === null) {
          const dataName = JSON.stringify(data['user'].profile.first_name);
          const dataSurname = JSON.stringify(data['user'].profile.last_name);
          if (this.checked) {
            localStorage.setItem('firstName', dataName);
            localStorage.setItem('lastName', dataSurname);
          } else {
            this.dataService.saveName(dataName);
            this.dataService.saveSurname(dataSurname);
          }
          this.router.navigate(['/home']);

        } else if (data['error'].code === 1) {
          this.showMessage(data['error'].description);

        } else if (data['error'].code === 2) {
          this.showMessage(data['error'].description);
          this.dataService.saveEmail(emailPass.email);
        } else {
          this.showMessage('Server error. Check your internet or contact to administrator');
        }
      }
    );
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 4000);
  }
}
