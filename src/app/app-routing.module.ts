import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from '../app/book-details/book-details.component';
import { BooksListComponent } from '../app/books-list/books-list.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from '../app/shipping/shipping.component';


const routes: Routes = [
  {path:'', component:BooksListComponent},      
  {path:'books/:bookId' , component:BookDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'shipping' , component:ShippingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
