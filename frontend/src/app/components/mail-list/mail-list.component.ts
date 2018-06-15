import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { WINDOW } from '../../services/window.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  dirleft = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
  ) { }

  ngOnInit() {

  }

  @HostListener("document:dir", [])
  private onWindowScroll() {
    console.log("direction change");
    if (document.dir === "rtl") {
      this.dirleft = false;
    } else {
      this.dirleft = true;
    }
  }
}
