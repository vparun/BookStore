import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookAlertComponent } from './book-alert/book-alert.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BooksListComponent,
    BookAlertComponent,
    TopBarComponent,
    ProductDetailsComponent,
    BookDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
    // RouterModule.forRoot([
    //   {path:'', component:BooksListComponent},      
    //   {path:'books/:bookId' , component:BookDetailsComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
