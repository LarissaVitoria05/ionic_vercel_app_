import { Injectable } from '@angular/core';

const KEY = 'favoritesBooks';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  constructor() {}

  getAll(): any[] {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  }

  add(book: any) {
    const list = this.getAll();
    // avoid duplicates by number or originalTitle
    if (!list.find(b => b.number === book.number && b.originalTitle === book.originalTitle)) {
      list.push(book);
      localStorage.setItem(KEY, JSON.stringify(list));
    }
  }

  remove(book: any) {
    const list = this.getAll();
    const filtered = list.filter(b => !(b.number === book.number && b.originalTitle === book.originalTitle));
    localStorage.setItem(KEY, JSON.stringify(filtered));
  }

  clear() {
    localStorage.removeItem(KEY);
  }
}
