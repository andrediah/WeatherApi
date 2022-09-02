import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../interfaces/forecast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  
  getForecast(): Observable<Forecast> {
    let returnVar =  this.httpClient.get<Forecast>(environment.apiEndpoint,
      //{headers: {'apiKey':'value'},params: {'a':'b'}}
      );

    return returnVar;
  }
}
