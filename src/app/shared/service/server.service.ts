import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://globalbit.co.il/front-end-assignment';

  login(data) {
    const url = this.baseUrl + '/login.php';
    return this.http.post(url, data);
  }

}
