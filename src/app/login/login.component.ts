import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import{Router} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _LoginService:LoginService,public _Router:Router){}
  
  login =new FormGroup({

    username: new FormControl(''),

    password: new FormControl('')

})
send(){
  this._LoginService.login(this.login.value).subscribe((res:any)=>{
    localStorage.setItem("angular_token",res.token)
    this._Router.navigate(["/products"])
    console.log(res.token)

  })
 
}
}
