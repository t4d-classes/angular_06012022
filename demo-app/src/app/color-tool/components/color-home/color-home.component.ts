import { Component, OnInit } from '@angular/core';
import { switchMap, tap, catchError, of } from 'rxjs';

import { Color, NewColor } from '../../models/colors';
import { ColorsDataService } from '../../services/colors-data.service';

@Component({
  // how I call the component
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = "Color Tool";
  colors: Color[] = [];
  errorMessage = "";

  constructor(private colorsData: ColorsDataService) {}

  ngOnInit(): void {
    this.doRefreshColors().subscribe();
  }

  doRefreshColors() {
    this.errorMessage = "";
    return this.colorsData.all().pipe(
     catchError(err => {
      this.errorMessage = err.message;
      return of([]);
     }),
     // perform a side-effect
     tap(colors => {
       // the side-effect from the perspective of the observable pipeline
       // is to change the state of the component
      this.colors = colors;
     }),
    );
  }

  doAddColor(color: NewColor) {
    this.colorsData.append(color)
      .pipe(
        switchMap(() => this.doRefreshColors())
      )
      .subscribe();
  }

}
