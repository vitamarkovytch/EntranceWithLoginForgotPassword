import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private dataService: DataService) { }

  firstName = '';
  lastName = '';

  ngOnInit() {
    const name = JSON.parse(localStorage.getItem('firstName'));
    const surname = JSON.parse(localStorage.getItem('lastName'));
    if (name && surname) {
      this.firstName = name;
      this.lastName = surname;
    } else if (this.dataService.getName() && this.dataService.getSurname()) {
      this.firstName = this.dataService.getName();
      this.lastName = this.dataService.getSurname();
    } else {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
