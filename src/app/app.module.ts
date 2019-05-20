import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteAddComponent } from './components/favorite-add/favorite-add.component';
import { NavComponent } from './components/nav/nav.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GradesComponent } from './components/grades/grades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    FavoriteAddComponent,
    NavComponent,
    CommentsComponent,
    GradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ProductsListComponent,
    ProductsDetailsComponent
  ]
})
export class AppModule {}
