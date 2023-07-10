import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _LoginService:LoginService){}
  
  login =new FormGroup({

    username: new FormControl(''),

    password: new FormControl('')

})
send(){
  this._LoginService.login(this.login.value).subscribe((res)=>{
    console.log(res)

  })
 
}
}
