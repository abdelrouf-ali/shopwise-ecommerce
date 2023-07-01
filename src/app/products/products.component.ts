import { ProductsService } from '../services/products.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = []; // Initialize the products array

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}