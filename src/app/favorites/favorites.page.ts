import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html'
})
export class FavoritesPage {
  list: any[] = [];
  constructor(private fav: FavoritesService) {
    this.load();
  }
  load(){
    this.list = this.fav.getAll();
  }
}
