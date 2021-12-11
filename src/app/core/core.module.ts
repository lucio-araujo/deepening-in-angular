import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule],
})
export class CoreModule {}
