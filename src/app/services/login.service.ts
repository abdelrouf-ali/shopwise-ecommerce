import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _HttpClient:HttpClient) { }

  register(data:any){
    return this._HttpClient.post("https://fakestoreapi.com/users",data)
  }
  login(data:any){
    return this._HttpClient.post("https://fakestoreapi.com/auth/login",data)
  }
}
