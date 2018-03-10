import { Component, OnInit } from '@angular/core';
import {
  NavParams,
  AlertController
} from 'ionic-angular';
import { Quote } from '../../app/data/quotes';
import { QuotesService } from '../../services/quotes.service';
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  private quoteGroup: any;
  constructor(
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote);
          }
        },
        {
          text: 'No, I changed my mind!',
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites = (quote: Quote) => this.quotesService.removeQuoteFromFavorites(quote);

  isFavorite = (quote: Quote) => this.quotesService.isQuoteFavorite(quote);
}
