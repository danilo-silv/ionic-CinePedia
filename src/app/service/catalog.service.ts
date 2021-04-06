import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Banner, DetailItem, Movie, Serie } from '../models/search';
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly url = `${environment.BASE_URL}`;

  constructor(private http: HttpClient) {}

  listBanners() {
    return this.http.get<Banner[]>(`${this.url}/banners`).pipe(take(1));
  }

  listMovies() {
    return this.http.get<Movie[]>(`${this.url}/catalog`).pipe(take(1));
  }

  listSeries() {
    return this.http.get<Serie[]>(`${this.url}/catalog`).pipe(take(1));
  }

  getById(type: 'movie' | 'serie', id: string) {
    return this.http.get<DetailItem>(`${this.url}/${type}/${id}`).pipe(take(1));
  }
}
