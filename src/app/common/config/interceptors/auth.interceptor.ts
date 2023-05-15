import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/common/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }
    /**
     * Add JWT tocken to each request
     * @param req
     * @param next
     * @returns
     */
    intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {

        if (req.headers.get('Anonymous') !== null) {
            const newHeaders = req.headers.delete('Anonymous')
            req = req.clone({ headers: newHeaders });
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `${this.auth.getToken()}`
                },
            });
        }
        return next.handle(req);
    }
}
