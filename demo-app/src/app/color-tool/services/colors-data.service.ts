import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Color } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsDataService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient
      .get<Color[]>('http://localhost:3060/colors');
  }
}
