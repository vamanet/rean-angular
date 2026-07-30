import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.api);
  }
}
