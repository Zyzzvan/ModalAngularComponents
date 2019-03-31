import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:8080/good-beers';

  constructor(private httpClient: HttpClient) {}

getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL);
  }
}


