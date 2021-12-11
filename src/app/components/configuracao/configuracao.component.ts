import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";

import { ICentroCirurgico } from "src/app/shared/models/centro-cirurgico";
import { IUnidade } from "src/app/shared/models/unidade";

import { UnidadeService } from "src/app/shared/services/unidade.service";
import { CentroCirurgicoService } from "src/app/shared/services/centro-cirurgico.service";
import { SalaService } from "src/app/shared/services/sala.service";

@Component({
  templateUrl: "./configuracao.component.html",
  styleUrls: ["./configuracao.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfiguracaoComponent implements OnInit, AfterViewInit {
  form: FormGroup = new FormGroup({});
  erroMessage = "";

  unidades$ = this.unidadeService.unidades$.pipe(
    catchError((err) => {
      this.erroMessage = err;
      return EMPTY;
    })
  );

  centrosCirurgicos$ = this.centroCirurgicoService.centrosCirurgicosConcat$;
  salas$ = this.salaService.salasConcat$;

  constructor(
    private unidadeService: UnidadeService,
    private centroCirurgicoService: CentroCirurgicoService,
    private salaService: SalaService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      unidadeControl: ["", Validators.required],
      centroControl: ["", Validators.required],
      salaControl: ["", Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.form.get("unidadeControl").valueChanges.subscribe((value: number) => {
      if (value !== 0) {
        this.form.get("salaControl").reset();
      }
    });
  }

  selecionarUnidade(unidade: IUnidade): void {
    this.centroCirurgicoService.passarNovaUnidade(unidade);
  }

  selecionarCentroCirurgico(centroCirurgico: ICentroCirurgico): void {
    this.salaService.passarNovoCentro(centroCirurgico);
  }
}
