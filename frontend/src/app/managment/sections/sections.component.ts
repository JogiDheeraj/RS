import {Component, OnInit} from '@angular/core';
import {PageEvent, MatDialog} from '@angular/material';

import {SectionService} from '../../services/section.service';
import {Section} from '../../model/model.section';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


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
  constructor(
    private sectionService: SectionService,
    public  editDialog:MatDialog
  ) {}
  
  ngOnInit() {
    this.loodPage(null, 0,10);
  }
  public edit_section (section:Section){
        
        const dialogRef=this.editDialog.open(EditDialogComponent,{
          width:'700px',
          height:'600px',
          data:{name:section.name,seoName:section.seoName,description:section.description,articleCount:section.articleCount}
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
    
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
