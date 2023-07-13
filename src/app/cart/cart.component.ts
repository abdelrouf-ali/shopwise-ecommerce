import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  icon=faTrash;
  public productList : any = [];
  public grandTotal !: number;
  constructor(private CartService : CartService){}


  ngOnInit(): void {
    this.CartService.getProducts().subscribe(res=>{
      this.productList = res;
      this.grandTotal = this.CartService.getTotalPrice();
    })  
  }
  removeItem(product:any){
    this.CartService.removeCartItem(product);
  }
  emptycart(){
    this.CartService.removeAllcart();
  }

}
