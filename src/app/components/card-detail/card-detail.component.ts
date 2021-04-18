import { Component, Input, OnInit } from '@angular/core';
import { DetailItem } from 'src/app/models/search';
import { StorageService } from 'src/app/service/storage.service';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  @Input() public data: DetailItem;

  public favotire: boolean = false

  constructor(private storage: StorageService) {}
  
  ngOnInit() {}

  async handleFavorite(id: number){

  this.favotire = !this.favotire

  await this.storage.addFavorite(id)
  }
}
