
import { CartService } from './../services/cart.service';
import { Component , OnInit, HostListener } from '@angular/core';
import {faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   icon=faCartShopping;
   search = faMagnifyingGlass;

   isSticky = false;

  public totalItem : number = 0
  constructor(private CartService :CartService){}

  


  ngOnInit(): void{
    this.CartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;

    })
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isSticky = window.pageYOffset > 0; }

}
