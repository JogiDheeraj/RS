import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../model/model.user';

@Injectable()
export class UserService {

  url = '/api/users';
  defaultPageIndex = "0";
  defaultpageSize = "10";

  constructor(public http: HttpClient) { }

  public getUsers(pageIndex: number, pageSize: number) {
    let params = new HttpParams();
    params = params.set('pageIndex', pageIndex ? pageIndex.toString() : this.defaultPageIndex);
    params = params.append('pageSize', pageSize ? pageSize.toString() : this.defaultpageSize);
    
    return this.http.get(this.url, { params: params });
  }

  public getUserByID(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  public save(user: User) {
    return this.http.post(this.url, user);
  }

  public delete(id: string) {
    return this.http.delete(this.url + "/" + id);
  }

}
