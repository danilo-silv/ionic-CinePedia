import { Component, Input, OnInit } from '@angular/core';
import { SliderOptions } from 'src/app/models/slider-options';

@Component({
  selector: 'app-card-carrousel',
  templateUrl: './card-carrousel.component.html',
  styleUrls: ['./card-carrousel.component.scss'],
})
export class CardCarrouselComponent implements OnInit {
  @Input() public cardList: Array<any>; //changing type data berfore
  @Input() public title: string;
  @Input() public customSliders: SliderOptions;

  public type: string = 'card';

  public slidesOptions: SliderOptions = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween: 10,
  };
  constructor() {}

  ngOnInit() {
    this.slidesOptions = { ...this.slidesOptions, ...this.customSliders };
  }
}
