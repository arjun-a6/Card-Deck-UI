import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:7141/api/cardDeck";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendPostRequest(cardString: string){
    return this.httpClient.post<any>(this.REST_API_SERVER, { cardList: cardString }).pipe(retry(3), catchError(this.handleError));
    //return this.httpClient.get(this.REST_API_SERVER,{responseType: 'text'}).pipe(retry(3), catchError(this.handleError));
  }
  
}
