import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Section} from '../model/model.section';


const sections:Array<Section> = [
  {id: "sadsd324234", name: "العقارات", seoName: "العقارات", description: "وصف", articleCount: 50, image: "",  content: "يبس سيب سيب سيب سيب"},
  {id: "sadsd324234", name: "الخدمات التجارية", seoName: "الخدمات_التجارية", description: "وصف", articleCount: 50, image: "",  content: "يبس سيب سيب سيب سيب"},
  {id: "sadsd324234", name: "الخدمات التعليمية", seoName: "الخدماتا_لتعليمية", description: "وصف", articleCount: 50, image: "",  content: "يبس سيب سيب سيب سيب"},
  {id: "sadsd324234", name: "الخدمات الصحية", seoName: "الخدمات_الصحية", description: "وصف", articleCount: 50, image: "",  content: "يبس سيب سيب سيب سيب"},
  {id: "sadsd324234", name: "الخدمات السياحية", seoName: "الخدماتا_لسياحية", description: "وصف", articleCount: 50, image: "",  content: "يبس سيب سيب سيب سيب"},
  {id: "sadsd324234", name: "دليل الشركات", seoName: "دليل_الشركات", description: "وصف", articleCount: 50, image: "",  content: "يبس سيب سيب سيب سيب"},
];

@Injectable()
export class SectionService {

  constructor(public http: HttpClient) {}
  
  getMeanSections() {
    //return this.http.post('/api/account/register', user);
    return sections;
  }

}
