import { Component, OnInit } from '@angular/core';
import { Recommendations } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';

const CATEGORIES = [
  {
    name: 'Próximas Estreias',
    category: 'premieres',
    id: 1,
  },
  {
    name: 'Filmes Bem Avaliados',
    category: 'movies',
    id: 2,
  },
  {
    name: 'Séries em Alta',
    category: 'series',
    id: 3,
  },
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public banners: Array<Recommendations>;
  public categories: any;
  public fetch: boolean = true;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService
      .listBillboard()
      .subscribe(
        (data: Recommendations[]) => (this.banners = data.slice(0, 3))
      );

    this.catalogService.listGenre().subscribe((genre: any[]) => {
      CATEGORIES.map((item) => {
        const list = genre.filter((e) => item.id === e.categorie);
        this.handleCategories(list, item.category);
      });

      //simulate request
      setTimeout(() => {
        this.fetch = false;
      }, 3000);
    });
  }

  handleCategories(list: any[], categorie: string) {
    this.categories = {
      ...this.categories,
      [`${categorie}`]: {
        list: list,
      },
    };
  }
}
