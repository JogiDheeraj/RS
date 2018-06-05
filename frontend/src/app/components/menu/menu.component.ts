import {Component, HostListener, Inject, OnInit} from "@angular/core";
import {DOCUMENT} from '@angular/platform-browser';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {SectionService} from '../../services/section.service';
import {WINDOW} from "../../services/window.service";
import {Section} from '../../model/model.section';
import {IAppState} from '../../model/redux.store';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  @select() readonly isAuthentecated: Observable<boolean>;
  
  sections: Array<Section>;
  error: string;
  navIsFixed = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    private ngRedux: NgRedux<IAppState>,
    private sectionService: SectionService
  ) {}

  ngOnInit() {
    this.sectionService.getSections(null, null, null).subscribe(
      result => {
        this.sections = result["content"];
      },
      error => this.error = error
      );
  }

  @HostListener("window:scroll", [])
  private onWindowScroll() {
    const number = this.window.pageYOffset
      || this.document.documentElement.scrollTop
      || this.document.body.scrollTop
      || 0;
    if (number > 10) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
}