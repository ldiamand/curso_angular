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
    this.logger.logMessage('Este mensaje debería aparecer en la consola.');
  }
  
  ngOnInit() {
  }

}
