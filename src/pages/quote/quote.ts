import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import { Quote } from '../../app/data/quotes';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  private quote: Quote;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}

  ionViewWillLoad() {
    this.quote = this.navParams.data;
  }

  onClose = (remove = false) => this.viewCtrl.dismiss(remove);
}
