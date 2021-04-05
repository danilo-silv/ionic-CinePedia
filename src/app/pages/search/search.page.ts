import { Component, OnInit } from '@angular/core';
import { ListProp } from 'src/app/models/search';
import { CatalogService } from 'src/app/service/catalog.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public searchList: ListProp[] = [];
  public currentSearch = '';
  public filteredSearch = this.searchList;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService
      .listMovies()
      .subscribe((data: ListProp[]) => (this.searchList = data));
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
