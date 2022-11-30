import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public search = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient,private router:Router) { }

  viewallproduct() {
    const baseurl = 'https://farm-house-reubro-h1ua.onrender.com/api/v1/users/tours'
    return this.httpClient.get(baseurl);
  }
  viewproduct(productid: any) {
    const baseurl = 'https://farm-house-reubro-h1ua.onrender.com/api/v1/users/tours/' + productid
    return this.httpClient.get(baseurl);
  }
  onLogin(data: any) {
    console.log(`${(data.email, data.password)}`);
    let login = 'login';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${data.token}`,
    });
    this.httpClient
      .post<any>(
        'https://farm-house-reubro.onrender.com/api/v1/users/login ',
        data,
        { headers }
      )
      .subscribe((res) => {
        console.log(res);
        console.log(`-------------`);
        localStorage.setItem('token', res.token);
        if (!res.token) {
          // console.log(res);
          alert(`check  email and password`);
        }
        else{
        alert(`sucessfully logged in`);
        this.router.navigateByUrl('');
      }});
  }
  loggedin(){  
    return!!localStorage.getItem('token')
  }
}

// https://fakestoreapi.com/products

// https://farm-house-reubro-h1ua.onrender.com/api/v1/users/tour/

// https://farm-house-reubro-h1ua.onrender.com/api/v1/users/tours