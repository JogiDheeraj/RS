import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

import { FileService } from '../../services/file.service';


@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent {

  @Output() imageUplouded = new EventEmitter<string>();
  @ViewChild('myInput') myFileInput: any;
  
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: {percentage: number} = {percentage: 0};

  constructor(private uploadService: FileService) {}

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.imageUplouded.emit(JSON.parse(event['body'].toString())['result']);
          this.currentFileUpload = null;
        }
      });

    this.selectedFiles = undefined;
  }

}
