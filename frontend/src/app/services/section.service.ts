import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'

import {Section} from '../model/model.section';

@Injectable()
export class SectionService {

  url = '/api/sections';
  defaultPageIndex = "0";
  defaultpageSize = "10";

  constructor(public http: HttpClient) {}

  public getSections(parentId: string, pageIndex: number, pageSize: number) {
    let params = new HttpParams();
    params = params.set('pageIndex', pageIndex ? pageIndex.toString() : this.defaultPageIndex);
    params = params.append('pageSize', pageSize ? pageSize.toString() : this.defaultpageSize);
    if (parentId) {
      this.url += parentId;
    }
    return this.http.get(this.url, {params: params}).map(res => {
      console.log(res);
      return res["result"];
    });

  }

  public getSectionBySeoName(seoName: string) {
    return this.http.get(this.url + "/" + seoName);
  }

  public getSectionByID(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  public getSubSections(id: string, pageIndex: number, pageSize: number) {
    let params = new HttpParams();
    params = params.set('pageIndex', pageIndex ? pageIndex.toString() : this.defaultPageIndex);
    params = params.append('pageSize', pageSize ? pageSize.toString() : this.defaultpageSize);
    return this.http.get(this.url + "/" + id + '/subsectins/', {params: params}).map(res => {
      return res["result"];
    });
  }

  public save(section: Section) {
    return this.http.post(this.url, section);
  }

  public delete(id: string) {
    return this.http.delete(this.url + id);
  }

}
