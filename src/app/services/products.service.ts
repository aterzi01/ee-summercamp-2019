import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../product';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  // tells angular that this service might itself have injected dependencies
  // if you ever want to inject a service into another service injectable decorator
  providedIn: 'root'
})
export class ProductsService {
  public favorites: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private _url: any = './assets/data/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http
      .get<IProduct[]>(this._url)
      .pipe(map(product => product.find(prod => prod.id === id)));
  }
}
