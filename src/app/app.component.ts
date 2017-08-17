import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public time:Date = new Date();

  public constructor() {
    setInterval(() => {
      this.time = new Date();
    },1000);
  }
}
