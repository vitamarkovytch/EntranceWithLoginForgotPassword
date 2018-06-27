import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private email: string;
  private name: string;
  private surname: string;

  constructor() {
  }

  saveEmail(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  saveName(name) {
    this.name = name;
  }

  saveSurname(surname) {
    this.surname = surname;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  deleteEmail() {
    this.email = '';
  }
}
