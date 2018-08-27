import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';

import {Job} from '../model/model.job';

@Injectable()
export class WebSpiderService {

  url = '/api/scanners';

  constructor(public http: HttpClient) {}

  public getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  public start(jobID: string) {
    this.http.put(this.url + "/" + jobID + "/start", "").subscribe();
  }

  public stop(jobID: string) {
    this.http.put(this.url + "/" + jobID + "/stop", "").subscribe();
  }
  
  public interrupt(jobID: string) {
    this.http.put(this.url + "/" + jobID + "/interrupt", "").subscribe();
  }
  
  public resum(jobID: string) {
    this.http.put(this.url + "/" + jobID + "/resum", "").subscribe();
  }
  
  public delete(jobID: string) {
    return this.http.delete(this.url + "/" + jobID + "/delete");
  }

  public new(name: string) {
    return this.http.get(this.url + "/" + name);
  }

}