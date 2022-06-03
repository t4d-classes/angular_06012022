import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { CarToolRoutingModule } from './car-tool-routing.module';

import { CarsDataService } from './services/cars-data.service';

import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';



@NgModule({
  declarations: [
    CarFormComponent,
    CarHomeComponent,
    CarTableComponent,
    CarViewRowComponent,
    CarEditRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CarToolRoutingModule,
  ],
  exports: [ CarHomeComponent],
  providers: [
    CarsDataService
  ]
})
export class CarToolModule { }
