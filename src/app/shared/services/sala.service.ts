import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Subject, throwError } from "rxjs";
import { catchError, concatMap, toArray } from "rxjs/operators";

import { environment } from "src/environments/environment";

import { ICentroCirurgico } from "../models/centro-cirurgico";
import { ISala } from "../models/sala";

@Injectable({
  providedIn: "root",
})
export class SalaService {
  private baseUrl = environment.appSettings.baseUrl;

  private centroCirurgicoSelecionadoSubject = new Subject<ICentroCirurgico>();
  centroCirurgicoSelecionadoAction$ =
    this.centroCirurgicoSelecionadoSubject.asObservable();

  sala$ = this.http
    .get<ISala[]>(`${this.baseUrl}/Salas`)
    .pipe(catchError(this.handleError));

  salasConcat$ = this.centroCirurgicoSelecionadoAction$.pipe(
    concatMap((centroCirurgico) =>
      from(centroCirurgico.SalasIds).pipe(
        concatMap((salasIds) =>
          this.http.get<ISala>(`${this.baseUrl}/Salas/${salasIds}`)
        ),
        toArray()
      )
    )
  );

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

  passarNovoCentro(centroCirurgico: ICentroCirurgico): void {
    this.centroCirurgicoSelecionadoSubject.next(centroCirurgico);
  }
}
