import {
  Component, OnInit, Input,
  Output, EventEmitter,
} from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

import { Car } from '../../models/cars';

@Component({
  selector: '.app-car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css']
})
export class CarEditRowComponent implements OnInit {

  @Input()
  car!: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  editCarForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.editCarForm = this.fb.group({
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });
  }

  doSaveCar() {
    this.saveCar.emit({
      ...this.editCarForm.value,
      id: this.car.id,
    });
  }

  doCancelCar() {
    this.cancelCar.emit();
  }
}