import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote, Quotes } from '../../app/data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  private collection: { category: string, quotes: Quote[], icon: string }[];
  private quotesPage = QuotesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.collection = Quotes;
  }
}
