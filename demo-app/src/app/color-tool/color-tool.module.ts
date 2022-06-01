import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';



@NgModule({
  // register a component in the declarations so
  // I can call it from a template
  declarations: [
    ColorHomeComponent,
    ColorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  // allow templates in other modules to
  // call ColorHomeComponent
  exports: [
    ColorHomeComponent,
  ]
})
export class ColorToolModule { }
