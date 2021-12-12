import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-today",
  template: ` {{ today }} `,
  styles: [],
})
export class TodayComponent implements OnInit {
  public today: moment.CalendarKey;

  ngOnInit() {
    moment.locale("pt-br");
    this.today = moment().format("DD [de] MMMM");
  }
}
