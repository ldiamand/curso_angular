import { Component, OnInit } from '@angular/core';

interface Movie {
  name: string;
  rating: string;
};

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movies: Movie[] = [
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ];

  displayedMovies: Movie[] = [];

  constructor() { }

  ngOnInit() {
  }

  filter(rating: string) {
  }

}

