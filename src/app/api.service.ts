import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  getproduct(){
    return this.http.get("http://localhost:3000/prod/get/product");//backend api
  }
}
