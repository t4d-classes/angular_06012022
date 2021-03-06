import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  buttonText = "Submit Car";

  carForm!: UntypedFormGroup;

  @Output()
  submitCar = new EventEmitter<NewCar>();

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  doSubmitCar() {
    console.log(this.carForm.value);
    this.submitCar.emit(this.carForm.value);
  }

}
