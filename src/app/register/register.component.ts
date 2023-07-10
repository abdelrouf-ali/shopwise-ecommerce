import { Component } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { LoginService } from '../services/login.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public _LoginServic:LoginService,public _Router:Router){}



  register =new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('')

  })
send(){
  
  console.log(this.register.value)
  this._LoginServic.register(this.register.value).subscribe((res)=>{
    this._Router.navigate(["/login"])
  })
}
}


