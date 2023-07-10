import { CartService } from './../services/cart.service';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public totalItem : number = 0
  constructor(private CartService :CartService){}

  ngOnInit(): void{
    this.CartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;

    })
  }

}
