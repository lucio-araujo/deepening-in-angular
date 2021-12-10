import { NgModule } from "@angular/core";
import {
  MzBadgeModule,
  MzCheckboxModule,
  MzCollapsibleModule,
  MzDropdownModule,
  MzInputModule,
  MzModalModule,
  MzNavbarModule,
  MzRadioButtonModule,
  MzSelectModule,
  MzSidenavModule,
  MzTooltipModule,
  MzValidationModule,
} from "ngx-materialize";

@NgModule({
  exports: [
    MzCheckboxModule,
    MzModalModule,
    MzSelectModule,
    MzDropdownModule,
    MzNavbarModule,
    MzCollapsibleModule,
    MzModalModule,
    MzTooltipModule,
    MzBadgeModule,
    MzRadioButtonModule,
    MzSidenavModule,
    MzInputModule,
    MzRadioButtonModule,
    MzValidationModule,
  ],
})
export class MaterializeModule {}
