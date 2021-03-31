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

  private cardsMovie = [
    {
      image: 'https://i.imgur.com/JmnLH4L.png',
    },
    {
      image: 'https://i.imgur.com/rxh0oLH.jpg',
    },
    {
      image: 'https://i.imgur.com/1r7ocY0.jpg',
    },
    {
      image: 'https://i.imgur.com/n633Iqf.jpg',
    },
    {
      image: 'https://i.imgur.com/7s96oCF.jpg',
    },
    {
      image: 'https://i.imgur.com/QT8mlBr.png',
    },
    {
      image: 'https://i.imgur.com/6D58oNg.png',
    },
  ];

  constructor() {}

  getBanners() {
    return this.banners;
  }

  getCardsMovie() {
    return this.cardsMovie;
  }
}
