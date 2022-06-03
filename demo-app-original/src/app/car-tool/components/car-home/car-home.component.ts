import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { Car, NewCar } from '../../models/cars';
import { CarsDataService } from '../../services/cars-data.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  cars: Car[] = [];

  editCarId = -1;

  constructor(private carsData: CarsDataService) { }

  ngOnInit(): void {
    this.carsData.all().subscribe({
      next: cars => this.cars = cars,
    });
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAddCar(car: NewCar) {
    this.carsData.append(car)
      .pipe(
        switchMap(() => this.carsData.all())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        }
      });
  }

  doSaveCar(car: Car) {
    this.carsData.replace(car)
      .pipe(
        switchMap(() => this.carsData.all())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        }
      });
  }

  doDeleteCar(carId: number) {
    this.carsData.remove(carId)
      .pipe(
        switchMap(() => this.carsData.all())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        }
      });
    this.editCarId = -1;
  }

}
