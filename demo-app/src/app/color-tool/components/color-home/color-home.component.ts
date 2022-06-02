import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from '../../models/colors';

@Component({
  // how I call the component
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = "Color Tool";

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  constructor() { }

  ngOnInit(): void {
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
