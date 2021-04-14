import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailItem, Recommendations } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public id: string;
  public data: DetailItem;
  public fetch: boolean = true;
  public recommendations: Array<Recommendations> = [];

  public sliderCustomRecommendations = {
    slidesPerView: 1.5,
  };

  constructor(
    private router: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.catalogService
        .getById(params['id'])
        .subscribe((detail: DetailItem) => {
          this.data = detail;
          this.fetch = false;
        });
    });

    this.catalogService
      .listRecomendations()
      .subscribe((data: Recommendations[]) => (this.recommendations = data));
  }
}
