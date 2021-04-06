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

  public data: DetailItem;

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
