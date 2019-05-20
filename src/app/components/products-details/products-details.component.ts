import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/product';
import { Location } from '@angular/common';
// import { IComments } from 'src/app/comments';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProduct;
  // comments: IComments[];
  constructor(
    private _productsServices: ProductsService,
    private activatedRoute: ActivatedRoute,
    private _loc: Location
  ) {}

  ngOnInit() {
    this.getProductHere();
  }
  getProductHere() {
    // zasto smo ovo nazvali isto zbunjuje me
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this._productsServices
      .getProduct(id)
      .subscribe(data => (this.product = data));
  }

  goBack() {
    this._loc.back();
  }
}
