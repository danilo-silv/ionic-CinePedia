import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Banner, DetailItem } from '../models/search';
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly url = `${environment.BASE_URL}`;

  constructor(private http: HttpClient) {}

  listBillboard() {
    return this.http.get<Banner[]>(`${this.url}/billboard`).pipe(take(1));
  }

  listGenre() {
    return this.http.get(`${this.url}/genre`).pipe(take(1));
  }

  getById(type: 'movie' | 'serie', id: string) {
    return this.http.get<DetailItem>(`${this.url}/${type}/${id}`).pipe(take(1));
  }
}
