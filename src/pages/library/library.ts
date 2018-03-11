import { Component, OnInit } from '@angular/core';
import { Quote, Quotes } from '../../app/data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  private quotesPage = QuotesPage;
  private collection: { category: string, quotes: Quote[], icon: string }[];
  constructor() {}

  ngOnInit() {
    this.collection = Quotes;
  }
}
