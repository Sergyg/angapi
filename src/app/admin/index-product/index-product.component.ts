import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../shared/models/products";
import {ProductService} from "../../core/services/crud-product.service";

@Component({
  selector: 'index-products',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.scss']
})
export class IndexProductComponent implements OnInit {

  products?: IProduct[];
  currentProduct: {} = {};
  currentIndex = -1;
  title = '';

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productsService.get()
      .subscribe({
        next: (data) => {
          // this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(product: IProduct, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  removeAllProducts(): void {
    this.productsService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
