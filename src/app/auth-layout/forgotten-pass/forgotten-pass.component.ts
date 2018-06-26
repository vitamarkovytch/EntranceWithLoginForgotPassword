import {Component, OnInit} from '@angular/core';

import {ServerService} from '../../service/server.service';
import {DataService} from '../../service/data.service';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-forgotten-pass',
  templateUrl: './forgotten-pass.component.html',
  styleUrls: ['./forgotten-pass.component.scss']
})
export class ForgottenPassComponent implements OnInit {

  constructor(private server: ServerService,
              private dataService: DataService) {
  }

  message: Message;
  email: string;

  ngOnInit() {
    this.email = this.dataService.getEmail();
  }

}
