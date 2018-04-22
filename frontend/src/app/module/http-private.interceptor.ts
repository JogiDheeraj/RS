import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry'; // don't forget the imports

@Injectable()
export class HttpPrivateInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Intercept the Spring Login X-Requested-With:XMLHttpRequest login form
    const xhr = request.clone({
      headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    //error handling
    return next.handle(xhr)
      .catch((err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }

        // ...optionally return a default fall-back value so application can continue (pick one)
        // which could be a default value (which has to be a HttpResponse here)
        // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
        // or simply an empty observable
        return Observable.empty<HttpEvent<any>>();
      });
  }
}
