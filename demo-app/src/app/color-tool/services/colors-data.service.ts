import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Color, NewColor } from '../models/colors';

@Injectable()
export class ColorsDataService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient
      .get<Color[]>('http://localhost:3060/colors');
  }

  append(color: NewColor) {
    return this.httpClient
      .post<Color>('http://localhost:3060/colors', color);
  }
}
