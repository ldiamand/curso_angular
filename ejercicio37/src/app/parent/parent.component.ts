import { Component, OnInit } from '@angular/core';
import { SimpleLoggerService } from '../simple-logger.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  prime;
  
  constructor(private logger: SimpleLoggerService) {
    console.log(logger);
  }
  
  logMessage() {
    this.logger.logMessage('this message should appear in the console');
  }
  
  ngOnInit() {
  }

}
