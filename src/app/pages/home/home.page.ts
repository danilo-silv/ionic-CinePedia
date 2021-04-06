import { Component, OnInit } from '@angular/core';
import { Banner, Movie, Serie } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public banners: Array<Banner>;
  public movies: Array<Movie>;
  public series: Array<Serie>;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService
      .listBanners()
      .subscribe((data: Banner[]) => (this.banners = data));

    this.catalogService
      .listMovies()
      .subscribe((data: Movie[]) => (this.movies = data));

    this.catalogService
      .listSeries()
      .subscribe((data: Serie[]) => (this.series = data));
  }
}
