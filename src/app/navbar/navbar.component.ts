
import { CartService } from './../services/cart.service';
import { Component , OnInit } from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   icon=faCartShopping;
  public totalItem : number = 0
  constructor(private CartService :CartService){}

  ngOnInit(): void{
    this.CartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;

    })
  }

}
