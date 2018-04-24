import { Section } from '../../model/model.section';
import {Component, HostListener, Inject, OnInit} from "@angular/core";
import {DOCUMENT} from '@angular/platform-browser';

import {AuthService} from '../../services/auth.service';
import {SectionService} from '../../services/section.service';
import {WINDOW} from "../../services/window.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {

  public navIsFixed = false;
  public sections:Array<Section>;
  error:string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window,
    public authService: AuthService,
    private sectionService: SectionService
  ) {}

  ngOnInit() {
     this.sectionService.getSections(null,null,null)
       .subscribe(
        result => {
          this.sections = result["content"];
        },
        error => this.error = error
      );
  }

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