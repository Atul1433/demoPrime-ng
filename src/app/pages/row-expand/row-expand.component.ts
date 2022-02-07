import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/productservice';

@Component({
  selector: 'app-row-expand',
  templateUrl: './row-expand.component.html',
  styleUrls: ['./row-expand.component.scss']
})
export class RowExpandComponent implements OnInit {

  products: Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
  }
}
