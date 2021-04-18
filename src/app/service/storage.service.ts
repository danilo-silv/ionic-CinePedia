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
  
  async findOneFavorite(id: number){
    const favorites = await this.storage.get('favorites')

    if(!favorites?.length) return 

    return favorites.find((i: number) => i === id)
  }

  async addFavorite(id: number){
    const isFavorite = await this.findOneFavorite(id)

    if(!isFavorite){
      const aux = []

      const favorites = await this.storage.get('favorites')
  
      if(favorites?.length) {
        favorites.map((e: number)=> aux.push(e))
      }
  
      aux.push(id)
  
      this.set('favorites', aux)
  
      return aux
    }

    return
  }

  async removeFavorite(id: number){
    const isFavorite = await this.findOneFavorite(id)

    if(isFavorite){

      let favorites = await this.storage.get('favorites')
  
      if(favorites?.length) {
        favorites = favorites.filter((e: number)=> id !== e)
      }
  
      this.set('favorites', favorites)
  
      return favorites
    }

    return
  }
}