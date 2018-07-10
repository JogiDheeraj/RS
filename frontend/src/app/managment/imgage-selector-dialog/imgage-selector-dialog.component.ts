import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DOCUMENT} from '@angular/platform-browser';

import {SectionService} from '../../services/section.service';
import {Section} from '../../model/model.section';
import {FileService} from '../../services/file.service';

@Component({
  selector: 'app-imgage-selector-dialog',
  templateUrl: './imgage-selector-dialog.component.html',
  styleUrls: ['./imgage-selector-dialog.component.css']
})
export class ImgageSelectorDialogComponent implements OnInit {

  files: string[];
  selected: string;

  constructor(
    public dialogRef: MatDialogRef<ImgageSelectorDialogComponent>,
    private filesService: FileService
  ) {}

  ngOnInit(): void {
    this.filesService.getFiles()
      .subscribe((results) => {
        this.files = results['result'];
      });
  }

  imageUplouded(event) {
    this.files.unshift(event);
  }

  selecteImage(file: string) {
    this.selected = file;
  }

  checkselected(file: string) {
    return file === this.selected;
  }

  save() {
    this.dialogRef.close(this.selected);
  }

}