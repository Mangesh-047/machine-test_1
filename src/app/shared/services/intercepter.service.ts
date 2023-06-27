import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor(
    private _loaderService: LoaderService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = `Berer Here Take a Auth token From Local Storage`
    this._loaderService.loaderStatus
      .next(true)


    const authRequest = req.clone({
      setHeaders: {
        Authorization: authToken
      }
    })

    return next.handle(authRequest)
      .pipe(
        // takeUntil(this.unSubscribeAll$),
        delay(500),
        finalize(() => this._loaderService.loaderStatus.next(false))
      )
  }
}
