import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailItem } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public id: string;
  public sliderCustomRecommendations = {
    slidesPerView: 1.5,
  };

  public recommendations = [
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

  public data = {
    details: {
      type: 'serie',
      image: 'https://i.imgur.com/7ZyNbYo.jpg',
      title: 'WandaVision (2021)',
      description:
        'Wanda Maximoff e Visão, um casal de super-heróis com uma vida perfeita, que começa a suspeitar que nem tudo é o que parece.',
      producer: 'Marvel Studios',
      creator: 'Jac Schaeffer',
      evaluation: '85',
    },
    actors: [
      {
        name: 'Elizabeth Olsen',
        character: 'Wanda Maximoff / The Scarlet Witch',
        image: 'https://i.imgur.com/oClroWv.jpg',
      },
      {
        name: 'Paul Bettany',
        character: 'Vision / The Vision',
        image: 'https://i.imgur.com/56FCo14.jpg',
      },
      {
        name: 'Kathryn Hahn',
        character: 'Agatha Harkness / Agnes',
        image: 'https://i.imgur.com/P2PF5P1.jpg',
      },
      {
        name: 'Teyonah Parris',
        character: 'Monica Rambeau / Geraldine',
        image: 'https://i.imgur.com/TSv2a6n.jpg',
      },
      {
        name: 'Randall Park',
        character: 'Jimmy Woo',
        image: 'https://i.imgur.com/gImXSnl.jpg',
      },
      {
        name: 'Kat Dennings',
        character: 'Darcy Lewis / The Escape Artist',
        image: 'https://i.imgur.com/z8HJMq8.jpg',
      },
    ],
  };

  constructor(
    private router: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      console.log(params['id']);
      // this.catalogService
      // .getById()
      // .subscribe((detail: DetailItem) => (this.data = detail));
    });
  }
}
