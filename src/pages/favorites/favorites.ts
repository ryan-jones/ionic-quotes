import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  MenuController
} from 'ionic-angular';
import { Quote } from '../../app/data/quotes';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../settings/settings.service';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private settingsService: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.removeFromFavorites(quote);
      }
    });
  }

  removeFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  getBackground = () => this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
}
