import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Section} from '../model/model.section';

@Injectable()
export class SectionService {

  constructor(public http: HttpClient) {}

  public getSections(parentId: string) {
    let url = '/api/sections';
    if (parentId) {
      url += "/" + parentId;
    }
    return this.http.get(url).retry(3);
  }

  public getSectionBySeoName(seoName: string) {
    return this.http.get('/api/sections/' + seoName).retry(3);
  }

  public getSectionByID(id: string) {
    return this.http.get('/api/sections/' + id).retry(3);
  }

  public getSubSections(id: string) {
    return this.http.get('/api/sections/' + id + '/subsectins/').retry(3);
  }

  public save(section: Section) {
    return this.http.post('/api/sections/', section).retry(3);
  }

  public delete(id: string) {
    return this.http.delete('/api/sections/' + id).retry(3);
  }

}
