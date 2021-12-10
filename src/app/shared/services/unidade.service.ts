import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "src/environments/environment";

import { IUnidade } from "../models/unidade";

@Injectable({
  providedIn: "root",
})
export class UnidadeService {
  private baseUrl = environment.appSettings.baseUrl;
  unidades$ = this.http
    .get<IUnidade[]>(`${this.baseUrl}/Unidades`)
    .pipe(catchError(this.handleError));

  constructor(private http: HttpClient) {}

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
