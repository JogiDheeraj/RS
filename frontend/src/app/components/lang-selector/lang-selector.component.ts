import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar', 'tr']);
    translate.setDefaultLang('ar');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar|tr/) ? browserLang : 'ar');
  }

  ngOnInit() {
  }

}
