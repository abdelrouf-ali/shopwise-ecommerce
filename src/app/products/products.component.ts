import { CartService } from './../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Component, OnInit} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any[] = [
    // Your product list
  ];

  isHovered: boolean[] = [];

  Star=faStar;
  
  // public productList : any ;

  constructor(private productsService: ProductsService, private CartService:CartService) {
    this.isHovered = Array(this.productList.length).fill(false);
   }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});

      });
    })
  }
  addtocart(product:any){
    this.CartService.addtoCart(product);


}
}
