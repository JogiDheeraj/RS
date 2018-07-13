import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';

@Injectable()
export class WebSpiderService {

  url = '/api/scanners';

  constructor(public http: HttpClient) {}

  public getAll() {
    return this.http.get(this.url);
  }

  public start(jobID: string) {
    this.http.put(this.url + "/" + jobID + "/execute/", "").subscribe();
  }

  public stop(jobID: string) {
    this.http.put(this.url + "/" + jobID + "/stop/", "").subscribe();
  }

  public new(name: string) {
    this.http.get(this.url + "/" + name).subscribe();
  }

}