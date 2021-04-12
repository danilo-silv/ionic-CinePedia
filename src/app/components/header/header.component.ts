import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  public showHeader: boolean = true;
  public typePage: number = 0;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.typePage = this.route.snapshot.data['type'];
  }

  ngOnInit() {}

  ngDoCheck() {
    const { url } = this.router;
    if (url === '/' || url === '/welcome') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

  handleClick(page: string): void {
    this.router.navigate([`cinepedia/genre/${page}`], {
      relativeTo: this.route,
    });
  }
}
