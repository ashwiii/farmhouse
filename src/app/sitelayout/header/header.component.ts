import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productservice:ProductService, private router:Router) { }
  login(){
    // this.router.navigateByUrl('login')

return !! localStorage.getItem('token');

  }


  logout(){
    alert("Do you want to logout")
    localStorage.removeItem('token')
    // this.router.navigateByUrl('')
  }
  ngOnInit(): void {
   
  }

}
