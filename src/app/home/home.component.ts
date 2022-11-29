import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email=''
  sDetails:any

  products: any

  constructor(private router: Router, private Productservice: ProductService) {
    if(localStorage.getItem('user')){
      this.email=(localStorage.getItem('user') || '')
      }
      this.sDetails=new Date()
  }
  readmore() {
    this.router.navigateByUrl('register')
  }
  viewmore() {
    this.router.navigateByUrl('farmhouse')
  }
  logout(){
    // localStorage.removeItem('_id')
    // localStorage.removeItem('currentAcno')
    localStorage.removeItem('token')


    this.router.navigateByUrl('')
  }
  // view(){
  //   this.router.navigateByUrl('single-view')
  // }

  ngOnInit(): void {

    this.Productservice.viewallproduct().subscribe(data=>{
      console.log(data);
      this.products=data

    })

  }

}
