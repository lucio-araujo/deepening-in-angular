import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ConfiguracaoComponent } from "./components/configuracao/configuracao.component";

import { MaterialModule } from "./shared/material.module";
import { SharedModule } from "./shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";

const routes: Routes = [
  { path: "configuracao", component: ConfiguracaoComponent },
  { path: "**", redirectTo: "configuracao" },
];

@NgModule({
  declarations: [AppComponent, ConfiguracaoComponent],
  imports: [
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
