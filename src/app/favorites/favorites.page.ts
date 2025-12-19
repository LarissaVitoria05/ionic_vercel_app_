import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html'
})
export class FavoritesPage {
  favorites: any[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.favoritesService.getAll();
  }

  viewDetails(book: any) {
    if (!book) return;

    const id = book.id || book.number;
    this.navCtrl.navigateForward(`/details/${id}`);
  }

  removeFavorite(book: any) {
    this.favoritesService.remove(book);
    this.loadFavorites();
  }

  clearAllFavorites() {
    this.favoritesService.clear();
    this.loadFavorites();
  }

  goHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
