import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/service/catalog.service';
import { StorageService } from 'src/app/service/storage.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  public genres: Array<any>;
  public favoriteList: Array<any>;
  public favorites: Array<any> = [];
  public fetch: boolean = true;

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.handleFavorites();
  }

  ionViewWillLeave() {
    this.favorites = [];
    this.fetch = true;
  }

  handleFavorites() {
    this.getFavorites();
    this.getGenres();
  }
  getGenres() {
    this.catalogService.listGenre().subscribe((genre: any[]) => {
      this.genres = genre;
      this.checkFavorites();
      this.fetch = false;
    });
  }

  async getFavorites() {
    this.favoriteList = await this.storage.get('favorites');
  }

  checkFavorites() {
    this.favoriteList?.map((fav) => {
      this.genres.map((genre) => {
        if (genre.id === fav) this.favorites.push(genre);
        else return;
      });
    });
  }

  handleClick(id: number) {
    this.router.navigate([`../details/genre/${id}`], {
      relativeTo: this.route,
    });
  }
}
