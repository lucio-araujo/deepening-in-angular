import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable, timer } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-clock",
  template: ` {{ time$ | async | date: "hh:mm:ss" }} `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
  public time$: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
}
