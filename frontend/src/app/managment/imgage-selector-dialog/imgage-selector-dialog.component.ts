import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

import { SectionService } from '../../services/section.service';
import { Section } from '../../model/model.section';

@Component({
  selector: 'app-imgage-selector-dialog',
  templateUrl: './imgage-selector-dialog.component.html',
  styleUrls: ['./imgage-selector-dialog.component.css']
})
export class ImgageSelectorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImgageSelectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Section,
    @Inject(DOCUMENT) public document: Document
  ) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    
  }

  imageSelected() {
    
  }

}