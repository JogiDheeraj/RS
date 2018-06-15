import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public articles = [
    {
      id: "asdas21323",
      title: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو",
      location: "اسطنبول",
      date: 1523298066,
      simpleText: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو تصدّر مواطنو المملكة العربية السعودية قائمة الأجانب الأكثر…",
      content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>",
      image: "./assets/images/1113.jpg"
    },
    {
      id: "asdas21323",
      title: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو",
      location: "اسطنبول",
      date: 1523298066,
      simpleText: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو تصدّر مواطنو المملكة العربية السعودية قائمة الأجانب الأكثر…",
      content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>",
      image: "./assets/images/3331.jpg"
    },
    {
      id: "asdas21323",
      title: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو",
      location: "اسطنبول",
      date: 1523298066,
      simpleText: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو تصدّر مواطنو المملكة العربية السعودية قائمة الأجانب الأكثر…",
      content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>",
      image: "./assets/images/4441.jpg"
    },
    {
      id: "asdas21323",
      title: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو",
      location: "اسطنبول",
      date: 1523298066,
      simpleText: "السعوديون يتصدّرون قائمة الأجانب الأكثر شراء للعقارات في تركيا خلال مايو تصدّر مواطنو المملكة العربية السعودية قائمة الأجانب الأكثر…",
      content: "<h1>dsfsf</h1><strong>sdasd asdasd asd</strong>",
      image: "./assets/images/5552.jpg"
    }
  ];

  ngOnInit() {
  }

}
