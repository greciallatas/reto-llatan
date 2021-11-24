import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://fakestoreapi.com/"

  constructor(private http: HttpClient) { }

  loginByUser(form:LoginI):Observable<ResponseI> {
    let direction = this.url + 'auth/login';
    return this.http.post<ResponseI>(direction, form);
  }
}
