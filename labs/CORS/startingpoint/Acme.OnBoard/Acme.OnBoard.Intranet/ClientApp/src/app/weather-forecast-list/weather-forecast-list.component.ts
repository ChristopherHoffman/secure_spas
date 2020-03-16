import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-service.service';
import { WeatherForecast } from '../WeatherForecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',

})
export class WeatherForecastListComponent  {
  public forecasts: WeatherForecast[] = [];

  constructor(readonly service: WeatherForecastService) {
    service.forecast$.subscribe(fs => this.forecasts = fs);
}



}
