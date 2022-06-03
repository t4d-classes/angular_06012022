import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  private _cars: Car[] = [];
  private _editCarId = -1;

  @Input()
  set cars(value: Car[] | null) {
    this._cars = value === null ? [] : value;
  }

  get cars() {
    return this._cars;
  }

  @Input()
  set editCarId(value: number | null) {
    this._editCarId = value === null ? -1 : value;
  }

  get editCarId() {
    return this._editCarId;
  }


  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();  

  constructor() { }

  ngOnInit(): void {
  }

}
