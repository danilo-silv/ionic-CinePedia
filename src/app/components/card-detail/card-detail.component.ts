import { Component, Input, OnInit } from '@angular/core';
import { DetailItem } from 'src/app/models/search';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  @Input() public data: DetailItem;

  constructor() {}

  ngOnInit() {}
}
