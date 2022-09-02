import { Component } from '@angular/core';
import { Forecast } from './interfaces/forecast';
import { ApiService } from './servcies/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  appForecast:Forecast|undefined;
  currentTimeOfDay:boolean = false;
  constructor(private apiServcie:ApiService){

  }
  ngOnInit(){
    //this.getAllTodos();
    this.getApiResponse();
  }
  getApiResponse():void{
    

    this.apiServcie.getForecast().subscribe((data) => {
      this.appForecast = {...data};

      this.currentTimeOfDay = this.appForecast.properties?.periods[0].isDaytime;

      // let a = this.appForecast.properties.periods;
      // a.forEach(e => {
      //   console.log(e.name);
      // })
      // console.log(data);
    })

  }
}
