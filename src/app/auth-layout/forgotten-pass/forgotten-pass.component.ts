import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
              private dataService: DataService) {
  }

  form: FormGroup;
  message: Message;
  email: string;

  ngOnInit() {
    this.message = new Message('danger', '');
    this.email = this.dataService.getEmail();
    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  getErrorMessageEmail() {
    return this.form.get('email').hasError('required') ? 'This field is mandatory' :
      this.form.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {

  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 4000);
  }

}
