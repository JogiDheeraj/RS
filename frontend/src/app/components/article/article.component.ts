import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public articles = [
    {id: "asdas21323", title: "We are covered", date: 1523298066 , simpleText: "sdasd asdasd asd", content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>" , image:"./assets/images/1113.jpg"},
    {id: "asdas21323", title: "We are covered", date: 1523298066 , simpleText: "sdasd asdasd asd", content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>" , image:"./assets/images/1113.jpg"},
    {id: "asdas21323", title: "We are covered", date: 1523298066 , simpleText: "sdasd asdasd asd", content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>" , image:"./assets/images/1113.jpg"},
    {id: "asdas21323", title: "We are covered", date: 1523298066 , simpleText: "sdasd asdasd asd", content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>" , image:"./assets/images/1113.jpg"}
  ];

  ngOnInit() {
  }

}
