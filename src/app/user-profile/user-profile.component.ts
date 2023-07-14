import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  
  constructor(public _Router:Router){

    if(localStorage.getItem("angular_token") === null){

      this._Router.navigate(["/Login"])
    }
  }

}
