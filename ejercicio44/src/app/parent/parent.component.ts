import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  forecast;
  city;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest() {
    console.log("Hola");
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid;
    this.http.get(url).subscribe((res => { console.log(res); }));
    
    /*.pipe(
      map((response: Response) => {
        console.log("respuesta");
        response.json();
    }));*/
    //.subscribe(data => {
    //  this.forecast = data.weather[0].description;
    //})
  }

}
