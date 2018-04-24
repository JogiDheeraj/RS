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

  displayedColumns = ['id', 'name', 'description', 'articleCount', 'options'];

  sections:Array<Section>;
  length = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  error:string;

  constructor(private sectionService: SectionService) {}

  ngOnInit() {
    this.loodPage(null, 0,10);
  }

  public changePage(pageEvent: PageEvent) {
    this.loodPage(null, pageEvent.pageIndex, pageEvent.pageSize);
  }
  
  private loodPage(parentId:string ,pageIndex:number, pageSize:number) {
    this.sectionService.getSections(parentId, pageIndex ,pageSize)
      .subscribe(
        result => {
          this.sections = result["content"];
          this.length = result["totalElements"]
        },
        error => this.error = error
      );
  }
}
