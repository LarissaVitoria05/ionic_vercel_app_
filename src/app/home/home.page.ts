import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage {
  book: any = null;
  isLoading = false;
  
  constructor(private books: BooksService, private router: Router) {
    this.loadRandomBook();
  }

  async loadRandomBook(){
    this.isLoading = true;
    try {
      this.book = await this.books.getRandomBook();
    } catch(e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  refreshBook() {
    this.loadRandomBook();
  }

  getDescriptionPreview(): string {
    if (!this.book?.description) return '';
    return this.book.description.length > 150 
      ? this.book.description.substring(0, 150)
      : this.book.description;
  }

  openDetails(){
    if (this.book) {
      this.router.navigate(['/details'], { state: { book: this.book } });
    }
  }

  goFavorites(){
    this.router.navigate(['/favorites']);
  }
}
