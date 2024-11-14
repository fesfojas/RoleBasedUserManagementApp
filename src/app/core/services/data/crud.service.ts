import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, throwError } from "rxjs";
import { REQ_RES_API } from "../../constants/api.constants";

@Injectable({ providedIn: 'root' })
export class CrudService {
    private _refreshNeeded$ = new Subject<void>();

    get refreshNeeded$() {
        return this._refreshNeeded$;
    }

    constructor(private httpClient: HttpClient) { }


    get<T, O>(endpoint: string, requestParam: O): Observable<T> {
        return this.httpClient.get<T>(`${REQ_RES_API.BASE_URL}${endpoint}`, { params: <any>requestParam })
            .pipe(
                catchError(this.handleHttpError)
            );
    }

    post<T, O>(endpoint: string, newObject: T): Observable<O> {
        return this.httpClient.post<O>(`${REQ_RES_API.BASE_URL}${endpoint}`, newObject)
            .pipe(
                catchError(this.handleHttpError)
            );
    }

    put<T, O>(endpoint: string, newObject: T): Observable<O> {
        return this.httpClient.put<O>(`${REQ_RES_API.BASE_URL}${endpoint}`, newObject)
            .pipe(
                catchError(this.handleHttpError)
            );
    }

    delete<T, O>(endpoint: string, requestParam: O): Observable<O> {
        return this.httpClient.delete<T>(`${REQ_RES_API.BASE_URL}${endpoint}`, { params: <any>requestParam })
            .pipe(
                catchError(this.handleHttpError),
            );
    }

    private handleHttpError(errorResponse: HttpErrorResponse): Observable<any> {
        return throwError(() => errorResponse);
    }
}