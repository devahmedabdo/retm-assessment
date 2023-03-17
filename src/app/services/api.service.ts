import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

let apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  checkToken(token: any) {
    return this.http.get(apiUrl + 'get=' + token);
  }
  checkCode(code: any) {
    return this.http.get(apiUrl + 'Code=' + code);
  }
}
