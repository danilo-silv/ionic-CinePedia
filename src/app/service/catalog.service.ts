import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private banners = [
    {
      image: 'https://i.imgur.com/KBH13ag.jpg',
    },
    {
      image: 'https://i.imgur.com/lnnou4s.jpg',
    },
    {
      image: 'https://i.imgur.com/n7OKI77.jpg',
    },
  ];

  constructor() {}

  getBanners() {
    return this.banners;
  }
}
