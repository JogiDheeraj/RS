import {Component, HostListener, Inject, OnInit} from "@angular/core";
import {DOCUMENT} from '@angular/platform-browser';

import {WINDOW} from "../../services/window.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {

  public navIsFixed = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window
  ) {}

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = this.window.pageYOffset
      || this.document.documentElement.scrollTop
      || this.document.body.scrollTop
      || 0;
    if (number > 300) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
}