import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(DOCUMENT) public document: Document
  ) { }

}
