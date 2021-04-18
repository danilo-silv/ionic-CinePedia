import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
   return this._storage?.get(key);
  }

  async addFavorite(id: number){
    const aux = []

    const favorites = await this.storage.get('favorites')

    if(favorites?.length) {
      favorites.map((e: number)=> aux.push(e))
    }

    aux.push(id)

    this.set('favorites', aux)

    return aux
  }
}