import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-element',
  templateUrl: './single-element.component.html',
  styleUrls: ['./single-element.component.css']
})
export class SingleElementComponent implements OnInit {

  productid:any
  productdata:any

  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService,private router:Router) { }
  booknow(){
    if(!localStorage.getItem('token')){
      alert('please login first')
      this.router.navigateByUrl('login')
    }
    else{
      alert('booking confirmed')
    }
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{
      console.log(data);
      this.productid=data['id']
      
    })
    this.productservice.viewproduct(this.productid).subscribe((item:any)=>{
      // console.log(`hey${item.images}`);
      
    this.productdata=item
    })
  }

}
