import { Component, OnInit } from '@angular/core';

import { Car, NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  cars: Car[] = [
    { id: 1, make: 'Tesla', model: 'S', year: 2020, color: 'red', price: 120000 },
    { id: 2, make: 'Ford', model: 'T', year: 1922, color: 'black', price: 800 },
  ];

  editCarId = -1;

  constructor() { }

  ngOnInit(): void {
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAddCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      },
    ];
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    const newCars = [...this.cars];
    newCars[carIndex] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }

}
