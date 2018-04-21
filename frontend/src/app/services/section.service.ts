import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Section} from '../model/model.section';

@Injectable()
export class SectionService {

  constructor(public http: HttpClient) {}
  
  getSections(parentId:string) {
    return this.http.get<Array<Section>>('/api/sections');
  }

}
