import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { Car, NewCar } from '../../models/cars';

import { CarToolStoreService } from '../../services/car-tool-store.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  get cars$() {
    return this.carToolStore.cars$;
  }

  get editCarId$() {
    return this.carToolStore.editCarId$;
  }

  constructor(private carToolStore: CarToolStoreService) { }

  ngOnInit(): void {
    this.carToolStore.refreshCars();
  }

  doEditCar(carId: number) {
    this.carToolStore.editCar(carId);
  }

  doCancelCar() {
    this.carToolStore.cancelCar();
  }

  doAddCar(car: NewCar) {
    this.carToolStore.addCar(car);
  }

  doSaveCar(car: Car) {
    this.carToolStore.saveCar(car);
  }

  doDeleteCar(carId: number) {
    this.carToolStore.deleteCar(carId);
  }

}
