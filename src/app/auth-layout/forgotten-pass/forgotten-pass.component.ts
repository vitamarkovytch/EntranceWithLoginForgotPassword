import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ServerService} from '../../shared/service/server.service';
import {DataService} from '../../shared/service/data.service';
import {Message} from '../../shared/models/message.model';

@Component({
  selector: 'app-forgotten-pass',
  templateUrl: './forgotten-pass.component.html',
  styleUrls: ['./forgotten-pass.component.scss']
})
export class ForgottenPassComponent implements OnInit {

  constructor(private server: ServerService,
              private dataService: DataService,
              private router: Router) {
  }

  form: FormGroup;
  message: Message;
  emailReceived = '';

  ngOnInit() {
    this.message = new Message('', '');
    this.emailReceived = this.dataService.getEmail();
    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    });
    if (this.emailReceived) {
      this.form.get('email').setValue(this.emailReceived);
    }
  }

  getErrorMessageEmail() {
    return this.form.get('email').hasError('required') ? 'This field is mandatory' :
      this.form.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    const emailPass = {
      email: this.form.value.email
    };

    this.server.forgotPassword(emailPass).subscribe(
      data => {
        console.log(data);
        if (data['error'] === null) {
          this.showMessage('Instructions were send on your email successfully',
            'primary');
          this.dataService.deleteEmail();
          // this.router.navigate(['/auth/login']);
        } else if (data['error'].code === 1) {
          this.showMessage(data['error'].description, 'danger');
        } else {
          this.showMessage('Server error. Check your internet or contact to administrator',
            'danger');
        }
      }
    );
  }

  private showMessage(text: string, type: string) {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 4000);
  }

}
