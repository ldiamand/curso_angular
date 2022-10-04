import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = [
    {name: "Star Wars", rating: 'R', id: 1},  
    {name: "Jaws", rating: 'PG', id: 2},  
    {name: "E.T.", rating: 'R', id: 3},  
    {name: "Teen Wolf", rating: 'G', id: 4},  
    {name: "Ferris Bueller's Day Off", rating: 'G', id: 5},  
  ]
  currentMovie: any;
  
  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
  }

}

