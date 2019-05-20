import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];

  constructor(private _productsServices: ProductsService) {} // local variable that gives us an instance of the product services

  // ngOnInit - we need to make use of service instance and fetch the product data
  ngOnInit() {
    this.getProductsHere(); // this.products= this._productsServices.getProducts(): ???
  }

  getProductsHere() {
    this._productsServices
      .getProducts()
      .subscribe(data => (this.products = data));
  }
}
