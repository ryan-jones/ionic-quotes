import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from './settings.service';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {
  }

  onToggle = (toggle: Toggle) => this.settingsService.setBackground(toggle.checked);

  checkAltBackground = () => this.settingsService.isAltBackground();
}
