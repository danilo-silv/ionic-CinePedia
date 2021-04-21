import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

//Precisamos dos filmes e series - GET NA API - OK
//Precisamos listar os filmes e series - DISPONIBILIZAR PARA O USUARIO
//Precisamos criar o filtro de series e filmes
//Precisamos filtrar os favoritos do usuario

export class FavoritesPage implements OnInit {
  public favorites: Array<any>;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.listGenre().subscribe((genre: any[])=>{
      this.favorites = genre
    });
  }

}
