import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Car, NewCar } from '../models/cars';

import { CarsDataService } from './cars-data.service';

@Injectable({
  providedIn: 'root'
})
export class CarToolStoreService {

  private _cars$ = new BehaviorSubject<Car[]>([]);
  private _editCarId$ = new BehaviorSubject<number>(-1);

  constructor(private carsData: CarsDataService) { }

  public get cars$() {
    return this._cars$;
  }

  public get editCarId$() {
    return this._editCarId$;
  }

  public editCar(carId: number) {
    this._editCarId$.next(carId);
  }

  public cancelCar() {
    this._editCarId$.next(-1);
  }

  public refreshCars() {
    this.carsData.all().subscribe({
      next: cars => {
        this._cars$.next(cars);
        this._editCarId$.next(-1);
      },
    });
  }

  public addCar(car: NewCar) {
    this.carsData
      .append(car)
      .pipe(switchMap(() => this.carsData.all()))
      .subscribe({
        next: cars => {
          this._cars$.next(cars);
          this._editCarId$.next(-1);
        },
      });
  }

  public saveCar(car: Car) {
    this.carsData
      .replace(car)
      .pipe(switchMap(() => this.carsData.all()))
      .subscribe({
        next: cars => {
          this._cars$.next(cars);
          this._editCarId$.next(-1);
        },
      });
  }

  public deleteCar(carId: number) {
    this.carsData
      .remove(carId)
      .pipe(switchMap(() => this.carsData.all()))
      .subscribe({
        next: cars => {
          this._cars$.next(cars);
          this._editCarId$.next(-1);
        },
      });
  }  
}
