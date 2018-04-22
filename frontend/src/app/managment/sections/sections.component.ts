import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';

import {SectionService} from '../../services/section.service';
import {Section} from '../../model/model.section';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  displayedColumns = ['position', 'name', 'articleis', 'specification'];

  sections:Array<Section>;
  length = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  error:string;

  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    this.loodPage();
  }

  public changePage(pageEvent: PageEvent) {
//    this.dataSource = SECTION_DATA.slice(
//      pageEvent.pageSize * pageEvent.pageIndex,
//      pageEvent.pageSize * (pageEvent.pageIndex + 1)
//    )
  }
  
  private loodPage(){
    this.sectionService.getSections("")
      .subscribe(
        data => {
          this.sections = data["result"];
          this.length = data[""]
        },
        error => this.error = error
      );
  }
}
