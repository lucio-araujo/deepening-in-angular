import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Subject, throwError } from "rxjs";
import { catchError, concatMap, toArray } from "rxjs/operators";

import { environment } from "src/environments/environment";

import { ICentroCirurgico } from "../models/centro-cirurgico";
import { IUnidade } from "../models/unidade";

@Injectable({
  providedIn: "root",
})
export class CentroCirurgicoService {
  private baseUrl = environment.appSettings.baseUrl;

  private unidadeSelecionadaSubject = new Subject<IUnidade>();
  unidadeSelecionadaAction$ = this.unidadeSelecionadaSubject.asObservable();

  centrosCirurgicos$ = this.http
    .get<ICentroCirurgico[]>(`${this.baseUrl}/CentrosCirurgicos`)
    .pipe(catchError(this.handleError));

  centrosCirurgicosConcat$ = this.unidadeSelecionadaAction$.pipe(
    concatMap((unidade) =>
      from(unidade.CentrosCirurgicosIds).pipe(
        concatMap((centroCirurgicoId) =>
          this.http.get<ICentroCirurgico>(
            `${this.baseUrl}/CentrosCirurgicos/${centroCirurgicoId}`
          )
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

  passarNovaUnidade(unidade: IUnidade): void {
    this.unidadeSelecionadaSubject.next(unidade);
  }
}
