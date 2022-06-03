import {
  Component, OnInit, Input, Output,
  EventEmitter, ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewColor, ColorForm } from '../../models/colors';

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

  colorForm!: FormGroup<ColorForm>;

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.nonNullable.group({
      name: this.fb.nonNullable.control('', [ Validators.required ]),
      hexcode: this.fb.nonNullable.control('', [ Validators.required ]),
    });
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value as NewColor);
  }

}
