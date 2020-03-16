import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { WeatherForecast } from './WeatherForecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private readonly _forecastsSubject = new BehaviorSubject<Array<WeatherForecast>>([]);
  public readonly forecast$ = this._forecastsSubject.asObservable();
  private readonly endpoint = "http://localhost:5000/weatherforecast";

  constructor(readonly client: HttpClient) {
    client.get<Array<WeatherForecast>>(this.endpoint)
      .subscribe(fs => this._forecastsSubject.next(fs));
  }




}
