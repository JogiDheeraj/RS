import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImgageSelectorDialogComponent } from '../imgage-selector-dialog/imgage-selector-dialog.component';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent {
  
   @Input('image') image: string;
   @Output() imageChange = new EventEmitter<string>();
  
  constructor(
    public dialog: MatDialog
  ) { }
  
  changeImage() {
    const dialogRef = this.dialog.open(ImgageSelectorDialogComponent);

    dialogRef.afterClosed().subscribe(dialogresult => {
      if (dialogresult) {
        this.imageChange.emit(dialogresult[0]);
      }
    });
    
  }

}
