import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  message='';
  value='';
  constructor() { }

  ngOnInit() {
  }

  products=Products;
  
  getShare(){
    this.message="Product has shared to user";
    console.log("Shared");
  }

}
