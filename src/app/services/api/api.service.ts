import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { ListProductsI } from '../../models/products.interface';

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

  getAllProducts():Observable<ListProductsI[]>{
    let direction = this.url + 'products';
    return this.http.get<ListProductsI[]>(direction);
  }
}
