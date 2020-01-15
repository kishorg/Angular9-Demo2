import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular9-Demo2';
  userName = "Kishor G";
  count = 0;

  getCount(ct) {
    this.count = ct;
  }
}
