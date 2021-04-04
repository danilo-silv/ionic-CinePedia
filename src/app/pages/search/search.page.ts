import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public searchList: Search[] = [];
  public currentSearch = '';
  public filteredSearch = this.searchList;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.searchList = this.catalogService.getCardsMovie();
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
