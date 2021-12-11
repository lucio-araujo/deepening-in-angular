import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ConfiguracaoComponent } from "./components/configuracao/configuracao.component";
import { HeaderComponent } from "./core/header/header.component";

import { MaterialModule } from "./shared/material.module";
import { SharedModule } from "./shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CoreModule } from "./core/core.module";

const routes: Routes = [
  { path: "configuracao", component: ConfiguracaoComponent },
  { path: "agendamentos", component: HeaderComponent },
  { path: "**", redirectTo: "configuracao" },
];

@NgModule({
  declarations: [AppComponent, ConfiguracaoComponent],
  imports: [
    CoreModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
