import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from '../shared/user';
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  url : string = "http://localhost:3000/api/";

  constructor(private _http : HttpClient) { }

  public sendData(user : User){
    console.log(user);
    
    return this._http.post(this.url, user)
    .pipe(catchError(this.handleError))
  }
  handleError(err : HttpErrorResponse){
    return throwError(err)
  }
}
