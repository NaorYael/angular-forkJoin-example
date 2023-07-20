import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.http.get('assets/categories.json');
  }

  public getProducts(): Observable<any> {
    return this.http.get('assets/products.json');
  }
  public getTest(): Observable<any> {
    return this.http.get('assets/test.json');
  }
}
