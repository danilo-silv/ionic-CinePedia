import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  public showHeader: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  ngDoCheck() {
    const { url } = this.router;
    if (url === '/' || url === '/cinepedia/welcome') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
