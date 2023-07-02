import { ProductsService } from './../services/products.service';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.productsService.getProduct(productId).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}