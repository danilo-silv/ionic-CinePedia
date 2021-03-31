import { Component, Input, OnInit } from '@angular/core';
import { SliderOptions } from 'src/app/models/slider-options';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
  @Input() public sliderOptions: SliderOptions;
  @Input() public type: string;
  @Input() public items: Array<any>;

  banners = [
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

  ngOnInit() {
    console.log(this.items);
    console.log(this.sliderOptions);
  }
}
