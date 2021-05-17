import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recommendations, DetailItem } from '../models/search';
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly url = `${environment.BASE_URL}`;

  constructor(private http: HttpClient) {}

  listBillboard() {
    return this.http
      .get<Recommendations[]>(`${this.url}/billboard`)
      .pipe(take(1));
  }

  listGenre() {
    return this.http.get(`${this.url}/genre`).pipe(take(1), delay(1500));
  }

  listRecomendations() {
    return this.http
      .get<Recommendations[]>(`${this.url}/recommendations`)
      .pipe(take(1));
  }

  getById(id: string) {
    return this.http
      .get<DetailItem>(`${this.url}/genre/${id}`)
      .pipe(take(1), delay(1500));
  }
}
