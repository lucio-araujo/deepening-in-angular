import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClockComponent } from "./clock/clock.component";
import { TodayComponent } from "./today/today.component";

@NgModule({
  declarations: [ClockComponent, TodayComponent],
  imports: [CommonModule],
  exports: [ClockComponent, TodayComponent],
})
export class SharedModule {}
