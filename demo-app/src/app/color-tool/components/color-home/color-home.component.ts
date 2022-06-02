import { Component, OnInit } from '@angular/core';

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

  constructor(private colorsData: ColorsDataService) {

  }

  ngOnInit(): void {

    // this.colors = this.colorsData.all();

    this.colorsData.all().subscribe({
      next: colors => this.colors = colors,
    });
  }

  doAddColor(color: NewColor) {

    this.colors = [
      ...this.colors,
      {
        ...color,
        id: Math.max(...this.colors.map(c => c.id), 0) + 1,
      },
    ];

  }

}
