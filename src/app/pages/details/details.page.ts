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
  public data: any;
  public fetch: boolean = true;
  public recommendations: any = [];

  public sliderCustomRecommendations = {
    slidesPerView: 1.5,
  };

  constructor(
    private router: ActivatedRoute,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.catalogService.getById(params['id']).subscribe((detail) => {
        this.data = detail.body;
        this.fetch = false;
      });
    });

    this.catalogService
      .listRecomendations()
      .subscribe((data) => (this.recommendations = data.body));
  }
}
