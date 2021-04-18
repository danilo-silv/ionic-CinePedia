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

  public favorite: boolean = false

  constructor(private storage: StorageService) {}
  
  async ngOnInit() {
    const { id } = this.data

    this.favorite = await this.storage.findOneFavorite(id) ? true : false

  }

  async handleFavorite(id: number){
    this.favorite = !this.favorite

    if(!this.favorite){
      await this.storage.removeFavorite(id)
    }else{
      await this.storage.addFavorite(id)
    }
  }
}
