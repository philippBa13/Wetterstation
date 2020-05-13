import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getTemperatures() {
    return this.http.get<TemperatureData[]>(this.apiUrl + 'temps/');

  }

}

export interface TemperatureData {
  id: Number,
  value: Number,
  time: Date
}
