import { Component, Input, OnInit } from '@angular/core';
import { Recommendations } from 'src/app/models/search';
import { SliderOptions } from 'src/app/models/slider-options';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() public bannerList: Array<Recommendations>;

  public type: string = 'banner';
  public slidesOptions: SliderOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    pager: true,
    autoplay: true,
  };

  constructor() {}

  ngOnInit() {}
}
