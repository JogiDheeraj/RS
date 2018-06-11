import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';

import {SectionService} from '../../services/section.service';
import {Section} from '../../model/model.section';
import {SectionEditDialogComponent} from '../section-edit-dialog/section-edit-dialog.component';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  displayedColumns = ['name', 'description', 'articleCount', 'options'];

  sections: Array<Section>;
  totalCount = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  error: string;
  
  currentParentId = null;
  currentPageIndex = 1;
  currentPageSize = 10;
  
  looding = true;
  
  constructor(
    private sectionService: SectionService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loodPage(null, 0, 10);
  }

  public deleteSection(id: string) {
    const dialogRef = this.dialog.open(
      ConfirmDialogComponent, {
        width: '250px', 
        height: '200px'
      });

    dialogRef.afterClosed().subscribe(dialogresult => {
      if (dialogresult) {
        this.sectionService.delete(id)
          .subscribe(result => {
            if (result['status'] === 'SUCCESS') {
              this.reLood();
            }
        });
      }
    });
  }
  
  public newSection(){
    this.editSection(new Section());
  }
  
  public editSection(section: Section) {

    const dialogRef = this.dialog.open(
      SectionEditDialogComponent, {
        width: '700px',
        height: '600px',
        data: section
      });
    
    dialogRef.afterClosed().subscribe(dialogresult => {
      if (dialogresult) {
        this.reLood();
      }
    });

  }
  
  public changePage(pageEvent: PageEvent) {
    this.loodPage(null, pageEvent.pageIndex, pageEvent.pageSize);
  }
  
  private reLood(){
    this.loodPage(this.currentParentId, this.currentPageIndex , this.currentPageSize);
  }

  private loodPage(parentId: string, pageIndex: number, pageSize: number) {
    this.looding = true;
    this.sectionService.getSections(parentId, pageIndex, pageSize)
      .subscribe(result => {
        this.looding = false;
        this.sections = result["content"];
        this.totalCount = result["totalElements"];
        this.currentPageIndex = pageIndex;
        this.currentPageSize = pageSize;
      });
  }

}
