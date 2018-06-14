import {Component, OnInit} from '@angular/core';

import {Section} from '../../model/model.section';
import {SectionService} from '../../services/section.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  sections: Array<Section>;
  error: string;
  
  formButtonXs = true;

  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    this.sectionService.getIndexSections()
      .subscribe(result => {
        this.sections = result["content"];
      },
      error => {
        this.error = error
      });
  }

}
