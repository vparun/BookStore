import { Component, OnInit } from '@angular/core';
import { Books } from '../books';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books=Books;

  share(){
    window.alert("Product has been shared.");
    console.log("Product has been shared.");
  }

  onNotify() {
    window.alert("You will be notified once Product goes on sale.");
  }
}
