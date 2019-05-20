import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  favProducts: any[];

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this._productsService.favorites.subscribe(
      data => (this.favProducts = data)
    );
  }
}
