import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/platform-browser';

import {WINDOW} from '../../../services/window.service';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent {

  hostList = {
    'localhost.ar': 'en',
    'localhost.en': 'ar',
    'localhost.tr': 'tr'
  };

  rtlLangs = ['ar'];

  constructor(
    @Inject(WINDOW) private window,
    @Inject(DOCUMENT) private document: Document,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'ar', 'tr']);
    translate.setDefaultLang('ar');

    if (localStorage.getItem('userLangualge')) {
      this.changeLanguage(localStorage.getItem('userLangualge'));
    } else if (this.hostList[this.window.location.hostname]) {
      this.changeLanguage(this.hostList[this.window.location.hostname]);
    } else {
      const browserLang = translate.getBrowserLang();
      this.changeLanguage(browserLang.match(/en|ar|tr/) ? browserLang : 'ar')
    }
  }

  public changeLanguage(language) {
    localStorage.setItem('userLangualge', language);
    if (this.rtlLangs.includes(language)) {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
    this.translate.use(language);
  }
}
