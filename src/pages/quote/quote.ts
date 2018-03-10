import { Component } from '@angular/core';
import {
  NavParams,
  ViewController
} from 'ionic-angular';
import { Quote } from '../../app/data/quotes';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  private quote: Quote;
  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}

  ionViewWillLoad() {
    this.quote = this.navParams.data;
  }

  onClose = (remove = false) => this.viewCtrl.dismiss(remove);
}
