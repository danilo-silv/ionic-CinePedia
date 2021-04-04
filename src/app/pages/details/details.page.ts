import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public id: string;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }
}
