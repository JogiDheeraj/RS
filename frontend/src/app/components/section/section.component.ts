import { Section } from '../../model/model.section';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  
  SeoName:string;
  
  sections:Array<Section> = [
    {id: "sfsdf324234",  name: "تسجيل العلامة التجارية في تركيا",  seoName: "تسجيل العلامة التجارية في تركيا",  description: "تسجيل العلامة التجارية في تركيا",  articleCount: 20,  image: "./assets/images/1113.jpg",  content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>"},
    {id: "sfsdf32wrwew334",  name: "تأسيس شركة في تركيا",  seoName: "تأسيس شركة في تركيا",  description: "تسجيل العلامة التجارية في تركيا",  articleCount: 30,  image: "./assets/images/4441.jpg",  content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>"},
    {id: "sfsd3f324234",  name: "طلب الوكالات في تركيا",  seoName: "طلب الوكالات في تركيا",  description: "طلب الوكالات في تركيا",  articleCount: 50,  image: "./assets/images/5552.jpg",  content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>"},
    {id: "sfsd3f324234",  name: "الإقامات والفيزا في تركيا",  seoName: "الإقامات والفيزا في تركيا",  description: "الإقامات والفيزا في تركيا",  articleCount: 75,  image: "./assets/images/5552.jpg",  content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>"},
  ];
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.SeoName = this.route.snapshot.paramMap.get('SeoName');
  }

}
