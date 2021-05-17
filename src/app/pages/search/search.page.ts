import { Component, OnInit } from '@angular/core';
import { DetailItem } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public searchList: any = [];
  public currentSearch = '';
  public filteredSearch = this.searchList;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService
      .listGenre()
      .subscribe((data) => (this.searchList = data.body));
  }

  public searchItem() {
    if (this.currentSearch === '') {
      this.filteredSearch = [];
    } else {
      const lowercased = this.currentSearch.toLowerCase();
      this.filteredSearch = this.searchList.filter((item) =>
        item.title.toLowerCase().includes(lowercased)
      );
    }
  }
}
