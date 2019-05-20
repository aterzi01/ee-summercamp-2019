import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-add',
  templateUrl: './favorite-add.component.html',
  styleUrls: ['./favorite-add.component.css']
})
export class FavoriteAddComponent implements OnInit {
  @Input() product: IProduct;
  favoriteArray: any[];

  constructor(private _productsService: ProductsService) {}

  ngOnInit() {
    this._productsService.favorites.subscribe(
      data => (this.favoriteArray = data)
    );
    let i = 0;
    for (i = 0; i < this.favoriteArray.length; i++) {
      if (this.favoriteArray[i].id === this.product.id) {
        this.product.favorite = true;
      }
    }
  }

  addToFavorites() {
    this.product.favorite = !this.product.favorite;
    if (this.product.favorite) {
      this.favoriteArray.push(this.product);
      this._productsService.favorites.next(this.favoriteArray);
    } else {
      this.favoriteArray = this.favoriteArray.filter(
        product => product.id !== this.product.id
      );

      this._productsService.favorites.next(this.favoriteArray);
    }
  }
}
