import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  greatest: string;
  
  constructor() {
  }
  
  reveal() {
    // Implementar this.greatest = ;
  }

  ngOnInit() {
  }

}
