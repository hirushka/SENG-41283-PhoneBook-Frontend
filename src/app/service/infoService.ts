import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { infoDetails } from "../model/info";

@Injectable({
  providedIn: 'root'
})
export class infoService {

  private apiServer = "https://phonebookbackend.azurewebsites.net/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  getUserDetails(usernic): Observable<infoDetails> {
    return this.httpClient.get<infoDetails>(this.apiServer + 'hlwld/api/getuser/' + usernic)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  addUserDetails(user): Observable<infoDetails> {
    return this.httpClient.post<infoDetails>(this.apiServer + 'hlwld/api/saveuser', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}