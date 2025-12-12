import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage {
  book: any = null;
  loading = false;
  constructor(private books: BooksService, private router: Router) {
    this.load();
  }

  async load(){
    this.loading = true;
    try {
      this.book = await this.books.getRandomBook();
    } catch(e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  openDetails(){
    // pass data via navigation state
    this.router.navigate(['/details'], { state: { book: this.book } });
  }

  goFavorites(){
    this.router.navigate(['/favorites']);
  }
}
