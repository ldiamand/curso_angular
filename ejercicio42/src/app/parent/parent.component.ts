import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest() {
    
  }
}
