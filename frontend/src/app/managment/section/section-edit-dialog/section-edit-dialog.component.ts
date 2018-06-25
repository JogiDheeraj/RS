import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DOCUMENT } from '@angular/platform-browser';

import { SectionService } from '../../../services/section.service';
import { Section } from '../../../model/model.section';

@Component({
  selector: 'app-section-edit-dialog',
  templateUrl: './section-edit-dialog.component.html',
  styleUrls: ['./section-edit-dialog.component.css']
})
export class SectionEditDialogComponent implements OnInit {

  section: Section = new Section();
  indexSections: Array<Section>;
  error;

  constructor(
    public sectionService: SectionService,
    public dialogRef: MatDialogRef<SectionEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Section,
    @Inject(DOCUMENT) public document: Document
  ) { }

  ngOnInit(): void {
    this.section = Object.assign({}, this.data);
    this.sectionService.getIndexSections()
      .subscribe(result => {
        this.indexSections = result["content"];
      },
      error => {
        this.error = error
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitform() {
    if (!this.section.parentId) {
      this.section.parentId = { id: "index" };
    }
    this.sectionService.save(this.section)
      .subscribe(result => {
        if (result['status'] === 'SUCCESS') {
          this.dialogRef.close(true);
        }
      });
  }

}