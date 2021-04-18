import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getLastItemPath } from 'src/app/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  public showHeader: boolean = true;
  public typePage: string = 'home';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  ngDoCheck() {
    const { url } = this.router;

    const page = getLastItemPath(url);

    if (page === '' || page === 'welcome') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
    this.typePage = page;
  }

  handleClick(page: string): void {
    this.router.navigate([`cinepedia/genre/${page}`], {
      relativeTo: this.route,
    });
  }
}
