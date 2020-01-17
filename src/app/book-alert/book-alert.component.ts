import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book-alert',
  templateUrl: './book-alert.component.html',
  styleUrls: ['./book-alert.component.css']
})
export class BookAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() book;

  @Output() notify = new EventEmitter();

  notifyme(){
    console.log("Once product available will notify to Email!");
  }

}
