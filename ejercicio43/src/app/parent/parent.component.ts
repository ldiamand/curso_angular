import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output: string[] = [];
  
  constructor() {
    this.subject = new Subject();
  }

  ngOnInit(): void {
    this.subject
    .subscribe(key => {
      this.output.push(key);
    });
  }

  keypress(e: any): void {
    this.subject.next(e.key);
  }
  
}

