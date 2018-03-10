import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from './settings.service';
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
