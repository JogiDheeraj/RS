import { HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class FileService {

  constructor(private http: HttpClient) {}
  
  
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', '/api/files', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
  
  getFiles() {
    return this.http.get('/api/files');
  }
  
}