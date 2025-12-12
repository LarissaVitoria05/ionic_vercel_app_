import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html'
})
export class DetailsPage implements OnInit {
  book: any = null;
  
  constructor(
    private router: Router, 
    private fav: FavoritesService,
    private books: BooksService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.book = (nav && nav.extras && nav.extras.state && nav.extras.state['book']) || history.state['book'] || null;
  }

  async ngOnInit() {
    if (this.book && this.book.description) {
      const translated = await this.books.translateToPT(this.book.description);
      this.book.description_pt = translated;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addFavorite() {
    if (this.book) {
      this.fav.add(this.book);
      alert('Livro adicionado aos favoritos!');
    }
  }
}
