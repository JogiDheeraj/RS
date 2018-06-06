import { Section } from '../../model/model.section';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {SectionService} from '../../services/section.service'
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  section: Section=new Section();
  error;
  constructor(
    public sectionService:SectionService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submitform(){
    this.section.id=name;
    this.sectionService.save(this.section)
      .subscribe(
        result=>{
        console.log(result)
        },
        error=>{
          this.error=error;
          console.log(this.section.id)
        }
        
      );
    // send the http request to save the section object 
    // if it is edit make sure that the object contain ID 
    // after the responce , check the responce status 200 (OK)
    // close the dialoge and return true 
    // else show the error messages from backend in the dialoge
    // SectionSevice.save().subscribe.(result-> 
    // if(result.state == "OK") close the dialoge
    // else error = result.errors;
    // )
  }

}