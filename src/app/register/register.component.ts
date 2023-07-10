import { Component } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public _LoginServic:LoginService){}



  register =new FormGroup({
    name: new FormControl(''),

    email: new FormControl(''),

    password: new FormControl('')

  })
send(){
  
  console.log(this.register.value)
  this._LoginServic.register(this.register.value).subscribe((res)=>{
    console.log(res)
  })
}
}


