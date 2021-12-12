import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule, SharedModule, FlexLayoutModule],
})
export class CoreModule {}
