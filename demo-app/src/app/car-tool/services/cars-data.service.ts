import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Car, NewCar } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient
      .get<Car[]>('http://localhost:3060/cars');
  }

  append(car: NewCar) {
    return this.httpClient
      .post<Car>('http://localhost:3060/cars', car);
  }

  replace(car: Car) {
    return this.httpClient
      .put<void>(
        `http://localhost:3060/cars/${encodeURIComponent(car.id)}`,
        car,
      );
  }

  remove(carId: number) {
    return this.httpClient
      .delete<void>(
        `http://localhost:3060/cars/${encodeURIComponent(carId)}`,
      );
  }
}
