import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  firstName = '';
  lastName = '';

  ngOnInit() {
    const name = JSON.parse(localStorage.getItem('firstName'));
    const surname = JSON.parse(localStorage.getItem('lastName'));
    if (name && surname) {
      this.firstName = name;
        this.lastName = surname;
    } else {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
