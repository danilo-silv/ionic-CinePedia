import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  @Input() public title: string;
  @Input() public image: string;
  @Input() public description: string;
  @Input() public producer: string;

  constructor() {}

  ngOnInit() {}
}
