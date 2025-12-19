import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html'
})
export class FavoritesPage {
  favorites: any[] = [];
  
  constructor(private fav: FavoritesService, private router: Router) {
    this.loadFavorites();
  }
  
  loadFavorites(){
    this.favorites = this.fav.getAll();
  }

  viewDetails(book: any) {
    this.router.navigate(['/details'], { state: { book } });
  }

  removeFavorite(book: any) {
    this.fav.remove(book);
    this.loadFavorites();
  }

  clearAllFavorites() {
    this.fav.clear();
    this.loadFavorites();
  }
}
