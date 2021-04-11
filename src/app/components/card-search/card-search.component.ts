import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailItem } from 'src/app/models/search';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  @Input() public search: DetailItem;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  handleClick(id: number) {
    this.router.navigate([`../details/genre/${id}`], {
      relativeTo: this.route,
    });
  }
}
