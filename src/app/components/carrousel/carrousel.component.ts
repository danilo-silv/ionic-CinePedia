import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  handleClick(id: number) {
    this.router.navigate([`../details/genre/${id}`], {
      relativeTo: this.route,
    });
  }
}
