import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private endpoint = 'https://potterapi-fedeperin.vercel.app/en/books/random';
  
  constructor(private http: HttpClient) {}

  getRandomBook(): Promise<any> {
    return firstValueFrom(this.http.get(this.endpoint));
  }

  async translateToPT(text: string): Promise<string> {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt`;
      const response = await fetch(url);
      const data = await response.json();
      return data.responseData?.translatedText || text;
    } catch (error) {
      console.error('Erro na tradução:', error);
      return text;
    }
  }
}
