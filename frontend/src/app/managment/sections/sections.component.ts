import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
const SECTION_DATA: Section[]=[
  {name:'section1' ,position:1 ,articleis:45,specification:'section1' },
  {name:'section2' ,position:2 ,articleis:40,specification:'section2' },
  {name:'section3' ,position:3 ,articleis:54,specification:'section3' },
  {name:'section4' ,position:4 ,articleis:34,specification:'section4' },
  {name:'section5' ,position:5 ,articleis:86,specification:'section5' },
  {name:'section6' ,position:6 ,articleis:35,specification:'section6' },
  {name:'section7' ,position:7 ,articleis:45,specification:'section7' },
  {name:'section8' ,position:8 ,articleis:40,specification:'section8' },
  {name:'section9' ,position:9 ,articleis:54,specification:'section9' },
  {name:'section10',position:10,articleis:34,specification:'section10'},
  {name:'section11',position:11,articleis:86,specification:'section11'},
  {name:'section12',position:12,articleis:35,specification:'section12'}
]
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  displayedColumns = ['position', 'name', 'articleis', 'specification'];
  
  dataSource=SECTION_DATA.slice(0,10);
  
  length=SECTION_DATA.length;
  pageSize=10;
  pageSizeOptions = [5, 10, 25, 100];
  constructor() { }

  ngOnInit() {
  }
  changePage(pageEvent:PageEvent){
    this.dataSource=SECTION_DATA.slice(
      pageEvent.pageSize*pageEvent.pageIndex,
      pageEvent.pageSize*(pageEvent.pageIndex+1)
    )
  }
}
export interface Section{
  name:string;
  position:number;
  articleis:number;
  specification:string;
}
