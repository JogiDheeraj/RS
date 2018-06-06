import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';

import {SectionService} from '../../services/section.service';
import {Section} from '../../model/model.section';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  displayedColumns = ['name', 'description', 'articleCount', 'options'];

  sections: Array<Section>;
  length = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  error: string;

  constructor(
    private sectionService: SectionService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loodPage(null, 0, 10);
  }

  public deleteSection(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px', height: '200px'
    });

    dialogRef.afterClosed().subscribe(dialogresult => {
      if (dialogresult) {
        this.sectionService.delete(id)
          .subscribe(result => {
            console.log(result);
            //this.loodPage(parentId,pageEvent.pageIndex,pageEvent.pageSize);
          });
      }
    });
  }
  
  public edit_section(section: Section) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '700px',
      height: '600px',
      data: section
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }
  
  public changePage(pageEvent: PageEvent) {
    this.loodPage(null, pageEvent.pageIndex, pageEvent.pageSize);
  }

  private loodPage(parentId: string, pageIndex: number, pageSize: number) {
    this.sectionService.getSections(parentId, pageIndex, pageSize)
      .subscribe(result => {
        this.sections = result["content"];
        this.length = result["totalElements"]
      });
  }

}
