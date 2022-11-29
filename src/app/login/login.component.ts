import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:any
  signupForm!:FormGroup
  loginform!:FormGroup




  constructor(private http:HttpClient, private productservice: ProductService, private router: Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
   this.signupForm=this.formbuilder.group({
     name:[''],
     email:[''],
     place:[''],
     password:[''],
     passwordConfirm:[''],
     mobile:['']
   })
this.loginform=this.formbuilder.group({
  email:[''],
  password:['']
})

    this.initForm();

  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  loginProcess() {
    if (this.formGroup.valid) {

      this.productservice.onLogin(this.formGroup.value);
    }
  }
  signup(){
    this.http.post<any>("https://farm-house-reubro.onrender.com/api/v1/users/SignIn",this.signupForm.value).subscribe(res=>{
      alert("registration successfull 0");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("mistake")
    }
    )
  }

  // login(){
  //   this.http.get<any>("https://farm-house-reubro.onrender.com/api/v1/users/SignIn").subscribe(res=>{
  //     const user= res.find((a:any)=>{
  //       return a.email===this.loginform.value.email && a.password === this.loginform.value.password
  //     })
  //     if(user){
  //       alert("login successfully");
  //       this.loginform.reset();
  //       this.router.navigate([''])
  //     }else{
  //       alert("user not found")
  //     }
      
      
  //   })
  // }
}









