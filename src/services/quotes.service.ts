import { Injectable } from "@angular/core";
import { Quote } from "../app/data/quotes";


@Injectable()
export class QuotesService {

  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => quoteEl.id === quote.id);
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes = () => [...this.favoriteQuotes];

  isQuoteFavorite = (quote: Quote) => this.favoriteQuotes.find((quoteEl: Quote) => quoteEl.id === quote.id);
}
