import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit() {}

  handleClick(id: number) {
    if (!id) return;
    this.router.navigate([`/cinepedia/details/genre/${id}`]);
  }
}
