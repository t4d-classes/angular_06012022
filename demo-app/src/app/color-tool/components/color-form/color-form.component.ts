import {
  Component, OnInit, Input, Output,
  EventEmitter, ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { NewColor, ColorForm } from '../../models/colors';
import { hexcodeValidator } from 'src/app/shared/validators/hexcodeValidator';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = "Submit Color";

  @Output()
  submitColor = new EventEmitter<NewColor>();

  get nameError() {
    const errors = this.colorForm.get("name")?.errors as any;

    if (errors?.required) {
      return "Name is required.";
    }

    return '';
  }


  get hexcodeError() {
    const errors = this.colorForm.get("hexcode")?.errors as any;

    if (errors?.required) {
      return "Hexcode is required.";
    }

    if (errors?.hexcode) {
      return "Hexcode invalid format.";
    }

    return '';
  }

  colorForm!: FormGroup<ColorForm>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.nonNullable.group({
      name: this.fb.nonNullable.control('', [ Validators.required ]),
      hexcode: this.fb.nonNullable.control(
        '', [ Validators.required, hexcodeValidator ]),
    });
  }

  doSubmitColor() {

    if (this.colorForm.valid) {
      this.submitColor.emit(this.colorForm.value as NewColor);
    } else {
      console.log(this.colorForm.get("name")?.errors);
      console.log(this.colorForm.get("hexcode")?.errors);
    }

  }

}
