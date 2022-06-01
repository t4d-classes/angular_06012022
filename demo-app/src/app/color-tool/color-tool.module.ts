import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';



@NgModule({
  // register a component in the declarations so
  // I can call it from a template
  declarations: [
    ColorHomeComponent
  ],
  imports: [
    CommonModule
  ],
  // allow templates in other modules to
  // call ColorHomeComponent
  exports: [
    ColorHomeComponent,
  ]
})
export class ColorToolModule { }
