import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public bannerList: Array<any>;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.bannerList = this.catalogService.getBanners();
  }
}
